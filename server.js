export default {
  async fetch(r) {
    const url = new URL(r.url);
    const SUB = `${url.origin}/sub`;

    // 1. ВЫДАЧА ПОДПИСКИ (Строгий порядок и сквозная нумерация)
    if (url.pathname === "/sub") {
      const s = [
        // --- БЛОК LTE СЕРВЕРА ---
        "vless://0000000000000000000000000000000000000000@0.0.0.0:443?security=none&type=tcp#⚡️ СЕРВЕРА LTE ⚡️",
        "vless://4b9a117d-b568-0067-ae7f-d2ef213ab107@194.55.239.129:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇷🇺 Россия LTE #01 ⚡️",
        "vless://4b9a117d-b568-0068-ae7f-d2ef213ab107@194.55.239.122:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇷🇺 Россия LTE #02 ⚡️",
        "vless://4b9a117d-b568-000e-ae7f-d2ef213ab107@194.55.239.133:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇫🇮 Финляндия LTE #03 ⚡️",
        "vless://4b9a117d-b568-001e-ae7f-d2ef213ab107@194.55.239.130:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇫🇮 Финляндия LTE #04 ⚡️",
        "vless://4b9a117d-b568-000e-ae7f-d2ef213ab107@176.109.82.20:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇫🇮 Финляндия LTE #05 ⚡️",
        "vless://4b9a117d-b568-001e-ae7f-d2ef213ab107@176.109.82.21:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇫🇮 Финляндия LTE #06 ⚡️",
        "vless://4b9a117d-b568-0012-ae7f-d2ef213ab107@194.55.239.131:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇩🇪 Германия LTE #07 ⚡️",
        "vless://4b9a117d-b568-0012-ae7f-d2ef213ab107@176.109.82.20:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇩🇪 Германия LTE #08 ⚡️",
        "vless://4b9a117d-b568-0009-ae7f-d2ef213ab107@194.55.239.133:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇸🇪 Швеция LTE #09 ⚡️",
        "vless://4b9a117d-b568-0009-ae7f-d2ef213ab107@176.109.94.38:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇸🇪 Швеция LTE #10 ⚡️",
        "vless://4b9a117d-b568-000a-ae7f-d2ef213ab107@176.109.94.38:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇪🇪 Эстония LTE #11 ⚡️",
        "vless://4b9a117d-b568-000a-ae7f-d2ef213ab107@194.55.239.126:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇪🇪 Эстония LTE #12 ⚡️",
        "vless://4b9a117d-b568-0019-ae7f-d2ef213ab107@194.55.239.129:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=smartcaptcha.yandexcloud.net&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇬🇧 Великобритания LTE #13 ⚡️",
        "vless://4b9a117d-b568-4db4-ae7f-d2ef213ab107@194.55.239.123:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=smartcaptcha.yandexcloud.net&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇳🇱 Нидерланды LTE #14 ⚡️",
        "vless://4b9a117d-b568-000d-ae7f-d2ef213ab107@194.55.239.130:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇳🇴 Норвегия LTE #15 ⚡️",
        "vless://4b9a117d-b568-0006-ae7f-d2ef213ab107@194.55.239.122:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇱🇻 Латвия LTE #16 ⚡️",
        "vless://4b9a117d-b568-000c-ae7f-d2ef213ab107@194.55.239.127:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#🇮🇹 Италия LTE #17 ⚡️",
        
        // --- БЛОК WI-FI СЕРВЕРОВ ---
        "vless://1111111111111111111111111111111111111111@0.0.0.1:443?security=none&type=tcp#⚡️ СЕРВЕРА WI-FI ⚡️",
        "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@ru.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-38.userapi.com&sid=abbcd128#🇷🇺 Россия WI-FI #18 ⚡️",
        "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@fi.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-36.userapi.com&sid=abbcd128#🇫🇮 Финляндия WI-FI #19 ⚡️",
        "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@de-new.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=ads.x5.ru&sid=abbcd128#🇩🇪 Германия WI-FI #20 ⚡️",
        "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@se-new.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=ads.x5.ru&sid=abbcd128#🇸🇪 Швеция WI-FI #21 ⚡️",
        "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@pl.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-35.userapi.com&sid=abbcd128#🇵🇱 Польша WI-FI #22 ⚡️"
      ];
      return new Response(btoa(s.join("\n")), { 
        headers: { 
          "Content-Type": "text/plain; charset=utf-8", 
          "profile-title": "Lekklir VPN", 
          "profile-description": "Этот VPN от Lekklir, из-за того что он бесплатный может работать нестабильно.", 
          "Access-Control-Allow-Origin": "*" 
        } 
      });
    }

    // 2. ВЫВОД КРАСИВОГО ИНТЕРФЕЙСА САЙТА
    const html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lekklir VPN</title>
    <style>
        body {
            background-color: #0a0a0c;
            background-image: radial-gradient(circle at top, #131b31 0%, #0a0a0c 60%);
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        .header-section {
            text-align: center;
            padding: 45px 20px 25px 20px;
            width: 100%;
            max-width: 420px;
            box-sizing: border-box;
        }
        .lightning-icon {
            font-size: 42px;
            margin-bottom: 5px;
            display: inline-block;
        }
        .main-title {
            font-size: 38px;
            font-weight: 800;
            background: linear-gradient(90deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 10px 0;
            letter-spacing: -0.5px;
        }
        .subtitle {
            color: #94a3b8;
            font-size: 15px;
            margin-bottom: 25px;
        }
        .badges-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            max-width: 360px;
            margin: 0 auto;
        }
        .badge {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 13px;
            color: #e2e8f0;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .content-section {
            background: #000000;
            width: 100%;
            max-width: 450px;
            padding: 30px 24px;
            box-sizing: border-box;
            border-top-left-radius: 28px;
            border-top-right-radius: 28px;
            flex-grow: 1;
        }
        .section-title {
            font-size: 20px;
            font-weight: 700;
            margin: 25px 0 15px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #ffffff;
        }
        .section-title:first-child {
            margin-top: 5px;
        }
        .gradient-btn {
            background: linear-gradient(135deg, #7c3aed, #06b6d4);
            border-radius: 18px;
            padding: 16px;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            cursor: pointer;
            border: none;
            width: 100%;
            text-align: left;
            color: white;
            transition: transform 0.1s ease;
        }
        .gradient-btn:active {
            transform: scale(0.98);
        }
        .circle-icon {
            width: 38px;
            height: 38px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
            margin-right: 14px;
            flex-shrink: 0;
        }
        .btn-text {
            display: flex;
            flex-direction: column;
        }
        .btn-main {
            font-size: 16px;
            font-weight: 600;
        }
        .btn-sub {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.64);
            margin-top: 2px;
        }
        .app-card {
            background: #141416;
            border-radius: 16px;
            padding: 14px 16px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            border: 1px solid #202024;
        }
        .app-emoji {
            font-size: 24px;
            margin-right: 14px;
            flex-shrink: 0;
        }
        .app-text {
            display: flex;
            flex-direction: column;
        }
        .app-main {
            font-size: 16px;
            font-weight: 600;
        }
        .app-sub {
            font-size: 12px;
            color: #71717a;
            margin-top: 2px;
        }
        .info-box {
            background: #141416;
            border-radius: 18px;
            padding: 18px;
            border: 1px solid #202024;
        }
        .info-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 14px;
            color: #d4d4d8;
            line-height: 1.4;
        }
        .info-row:last-child {
            margin-bottom: 0;
        }
        .info-emoji {
            font-size: 16px;
            flex-shrink: 0;
            margin-top: 1px;
        }
        .warning-box {
            background: rgba(217, 119, 6, 0.07);
            border: 1px solid rgba(217, 119, 6, 0.25);
            border-radius: 14px;
            padding: 14px 16px;
            color: #f59e0b;
            font-size: 13px;
            text-align: center;
            margin-top: 22px;
            line-height: 1.4;
        }
        #toast {
            position: fixed;
            bottom: 30px;
            background: #10b981;
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: none;
            z-index: 100;
            animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

    <div class="header-section">
        <div class="lightning-icon">⚡</div>
        <div class="main-title">Lekklir VPN</div>
        <div class="subtitle">Бесплатный VPN для обхода блокировок</div>
        
        <div class="badges-container">
            <div class="badge">🔒 Бесплатно</div>
            <div class="badge">♾️ Безлимит</div>
            <div class="badge">🌍 22 сервера</div>
            <div class="badge">⚡ VLESS Reality</div>
        </div>
    </div>

    <div class="content-section">
        <div class="section-title">📱 Подключиться</div>
        
        <button class="gradient-btn" onclick="copyLink()">
            <div class="circle-icon">H</div>
            <div class="btn-text">
                <span class="btn-main">Подключить в Happ</span>
                <span class="btn-sub">Нажмите если установлен Happ</span>
            </div>
        </button>

        <button class="gradient-btn" onclick="copyLink()">
            <div class="circle-icon">V</div>
            <div class="btn-text">
                <span class="btn-main">Подключить в V2RayTun</span>
                <span class="btn-sub">Нажмите если установлен V2RayTun</span>
            </div>
        </button>

        <div class="section-title">📥 Скачать приложение</div>
        
        <div class="app-card">
            <div class="app-emoji">🤖</div>
            <div class="app-text">
                <span class="app-main">Happ для Android</span>
                <span class="app-sub">Google Play</span>
            </div>
        </div>

        <div class="app-card">
            <div class="app-emoji">🍎</div>
            <div class="app-text">
                <span class="app-main">Happ для iPhone</span>
                <span class="app-sub">App Store</span>
            </div>
        </div>

        <div class="section-title">ℹ️ Информация</div>
        
        <div class="info-box">
            <div class="info-row">
                <span class="info-emoji">♾️</span>
                <span>Безлимитный трафик — никаких ограничений по объёму</span>
            </div>
            <div class="info-row">
                <span class="info-emoji">🌍</span>
                <span>22 рабочих локации: Россия, Финляндия, Германия, Швеция, Эстония, Великобритания, Нидерланды, Норвегия, Латвия, Италия, Польша</span>
            </div>
            <div class="info-row">
                <span class="info-emoji">🔒</span>
                <span>Протокол VLESS Reality — стабильный обход любых блокировок</span>
            </div>
            <div class="info-row">
                <span class="info-emoji">🔄</span>
                <span>Автоматическое обновление конфигураций серверов</span>
            </div>
        </div>

        <div class="warning-box">
            ⚠️ Этот VPN от Lekklir, из-за того что он бесплатный может работать нестабильно. При проблемах попробуйте другой сервер из списка.
        </div>
    </div>

    <div id="toast">Ссылка скопирована в буфер!</div>

    <script>
        function copyLink() {
            const subUrl = "${SUB}";
            navigator.clipboard.writeText(subUrl).then(() => {
                const toast = document.getElementById('toast');
                toast.style.display = 'block';
                setTimeout(() => { toast.style.display = 'none'; }, 2500);
            }).catch(() => {
                alert("Не удалось скопировать. Ссылка: " + subUrl);
            });
        }
    </script>

</body>
</html>`;

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};

