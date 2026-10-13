/* =====================================================================
   LUMIA Flores · Analytics + A/B test (PostHog, EU Cloud)
   ---------------------------------------------------------------------
   Experiment: home page "Más vendidos" block
     flag key  : home-bestsellers
     control   : version A (no bestsellers block)
     test      : version B (bestsellers block under the hero)

   Tracking starts only after the visitor accepts analytics cookies.
   Without consent everyone sees version A and nothing is sent.

   Preview links for the portfolio (not counted in the experiment):
     index.html?v=a  -> always version A
     index.html?v=b  -> always version B
   ===================================================================== */
(function () {
    var POSTHOG_KEY  = 'phc_C9nVrxeb3nz7vcXLVFFuGvHusCq7nBrPm7RGgfGjMoQa';
    var POSTHOG_HOST = 'https://eu.i.posthog.com';
    var FLAG         = 'home-bestsellers';
    var CONSENT_KEY  = 'lumia-analytics-consent'; // 'granted' | 'denied'

    /* ---------- PostHog loader (official snippet) ---------- */
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

    posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        defaults: '2026-05-30',
        person_profiles: 'identified_only',
        opt_out_capturing_by_default: true,          // nothing is sent before consent
        session_recording: { maskAllInputs: true }   // checkout fields are never recorded
    });

    /* ---------- helpers ---------- */
    function store(key, value) {
        try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { return null; }
    }
    function consent() { return store(CONSENT_KEY); }
    function lang() { return store('lumia-lang') === 'en' ? 'en' : 'es'; }
    function page() {
        var p = location.pathname;
        if (/catalog\.html$/.test(p)) return 'catalog';
        if (/product\.html$/.test(p)) return 'product';
        if (/checkout\.html$/.test(p)) return 'checkout';
        return 'home';
    }
    function track(event, props) {
        if (consent() !== 'granted') return;
        posthog.capture(event, props || {});
    }
    var forced = (new URLSearchParams(location.search).get('v') || '').toLowerCase(); // 'a' | 'b' | ''

    /* ---------- A/B test on the home page ---------- */
    function showVariant(v) {
        var section = document.getElementById('bestsellers');
        if (section) section.hidden = (v !== 'B');
        document.documentElement.setAttribute('data-ab', v);
    }

    function runExperiment() {
        if (page() !== 'home') return;
        if (forced === 'a' || forced === 'b') {               // portfolio preview, not counted
            showVariant(forced.toUpperCase());
            posthog.register({ forced_variant: forced.toUpperCase() });
            track('home_viewed', { variant: forced.toUpperCase(), forced: true });
            return;
        }
        showVariant('A');                                       // default until flags arrive
        if (consent() !== 'granted') return;

        // Flags may arrive late (slow network, or right after the visitor accepts cookies).
        // Apply the variant whenever they arrive, exactly once per page view.
        var resolved = false;
        posthog.onFeatureFlags(function () {
            if (resolved) return;
            var flag = posthog.getFeatureFlag(FLAG);           // also logs the exposure
            if (flag === undefined) return;                     // not ready yet, wait for next load
            resolved = true;
            var v = flag === 'test' ? 'B' : 'A';
            showVariant(v);
            track('home_viewed', { variant: v, lang: lang() });
        });
        posthog.reloadFeatureFlags();                           // make sure flags are requested
    }

    /* ---------- page events ---------- */
    function pageEvents() {
        var p = page();
        if (p === 'product') {
            var id = Number(new URLSearchParams(location.search).get('id')) || 1;
            var ref = document.referrer || '';
            var from = /catalog\.html/.test(ref) ? 'catalog'
                     : (/index\.html/.test(ref) || /lumia-web\/?$/.test(ref)) ? 'home' : 'other';
            track('product_viewed', { product_id: id, from: from });
        }
        if (p === 'checkout') {
            var item = {};
            try { item = JSON.parse(sessionStorage.getItem('selectedProduct') || '{}'); } catch (e) {}
            track('checkout_started', { product_id: item.id || null });
            var form = document.getElementById('checkout-form');
            if (form) form.addEventListener('submit', function () {
                track('order_submitted', { product_id: item.id || null, price: item.price || null });
            }, true);
        }
    }

    /* ---------- clicks ---------- */
    document.addEventListener('click', function (e) {
        var el = e.target.closest ? e.target.closest('a, button') : null;
        if (!el) return;
        var ev = el.getAttribute('data-event');
        var href = el.getAttribute('href') || '';

        if (ev === 'bestseller_clicked') {
            track(ev, { product_id: Number(el.dataset.productId), position: Number(el.dataset.position), price: Number(el.dataset.price) });
        } else if (ev === 'catalog_clicked') {
            track(ev, { source: el.dataset.source || 'other' });
        } else if (href.indexOf('wa.me') > -1) {
            var source = el.classList.contains('whatsapp-float') ? 'float'
                       : el.closest('.hero') ? 'hero'
                       : el.closest('footer') ? 'footer'
                       : el.closest('.product-actions') ? 'product' : 'other';
            track('whatsapp_clicked', { source: source, page: page() });
        } else if (/catalog\.html/.test(href) && el.closest('.hero')) {
            track('catalog_clicked', { source: 'hero' });
        }
    }, true);

    /* ---------- cookie banner ---------- */
    var copy = {
        es: { text: 'Usamos cookies analíticas (PostHog, servidores en la UE) para entender cómo se usa la web y mejorarla.', ok: 'Aceptar', no: 'Rechazar' },
        en: { text: 'We use analytics cookies (PostHog, EU servers) to understand how the site is used and improve it.', ok: 'Accept', no: 'Decline' }
    };

    function banner() {
        if (consent()) return;
        var t = copy[lang()];
        var css = document.createElement('style');
        css.textContent =
            '.lumia-consent{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:3000;max-width:420px;' +
            'background:#FFFFFF;color:#4A4A4A;border:1px solid #DAB79F;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.16);padding:16px;' +
            'font:400 14px/1.5 Lato,system-ui,sans-serif;display:flex;flex-direction:column;gap:12px}' +
            '.lumia-consent p{margin:0}' +
            '.lumia-consent div{display:flex;gap:8px;flex-wrap:wrap}' +
            '.lumia-consent button{flex:1;min-width:120px;padding:10px 16px;border-radius:4px;font:inherit;font-size:13px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}' +
            '.lumia-consent .ok{background:#6A7562;color:#FFFFFF;border:1px solid #6A7562}' +
            '.lumia-consent .no{background:transparent;color:#6A7562;border:1px solid #6A7562}' +
            '.lumia-consent button:focus-visible{outline:2px solid #DAB79F;outline-offset:2px}';
        document.head.appendChild(css);

        var box = document.createElement('div');
        box.className = 'lumia-consent';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-label', 'Cookies');
        box.innerHTML = '<p>' + t.text + '</p><div><button type="button" class="ok">' + t.ok + '</button><button type="button" class="no">' + t.no + '</button></div>';
        document.body.appendChild(box);

        box.querySelector('.ok').addEventListener('click', function () {
            store(CONSENT_KEY, 'granted');
            posthog.opt_in_capturing();
            box.remove();
            posthog.register({ lang: lang() });
            runExperiment();                                    // also requests the flags
            pageEvents();
        });
        box.querySelector('.no').addEventListener('click', function () {
            store(CONSENT_KEY, 'denied');
            posthog.opt_out_capturing();
            box.remove();
        });
    }

    /* ---------- start ---------- */
    function start() {
        if (consent() === 'granted') posthog.register({ lang: lang() });
        runExperiment();
        pageEvents();
        banner();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
