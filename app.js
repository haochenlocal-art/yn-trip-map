// Data: 9-day weather-adaptive itinerary (Sep week 1)
const itinerary = [
  {
    day: 1,
    title: '北京 → 昆明 → 抚仙湖',
    subtitle: '抵达后前往抚仙湖东岸',
    color: '#0ea5e9',
    tips: '机场→抚仙湖约1.5h高速；雨天降速至80km/h',
    pois: [
      { name: '长水国际机场', time: '抵达', lat: 25.1019, lng: 102.9292 },
      { name: '抚仙湖东岸·帆船俱乐部', time: '下午', lat: 24.5495, lng: 102.9468 },
      { name: '湖畔咖啡·东岸', time: '傍晚', lat: 24.5415, lng: 102.9518 }
    ],
    weather: {
      sunny: [ '环湖东岸帆船体验（16:00-18:00，紫外线较弱）' ],
      rain: [ '抚仙湖化石博物馆（寒武纪标本）', '湖畔咖啡馆观雨' ],
      fog: [ '环湖短线观景，低速行驶，注意雾灯' ]
    }
  },
  {
    day: 2,
    title: '抚仙湖 → 建水（高铁1.5h+租车）',
    subtitle: '朱家花园 / 米轨小火车 / 紫陶体验',
    color: '#10b981',
    tips: '租SUV（如坦克300），出发前检查胎压，防雨后山路打滑',
    pois: [
      { name: '建水站', time: '上午', lat: 23.6195, lng: 102.8201 },
      { name: '朱家花园', time: '上午', lat: 23.6199, lng: 102.8352 },
      { name: '建水米轨小火车·临安站', time: '下午', lat: 23.6209, lng: 102.8368 },
      { name: '建水紫陶博物馆', time: '备选', lat: 23.6135, lng: 102.8228 },
      { name: '朝阳楼', time: '傍晚', lat: 23.6188, lng: 102.8322 }
    ],
    weather: {
      sunny: [ '朱家花园（9:00-11:30避暑）', '米轨小火车（14:30班次，田园林荫道）' ],
      rain: [ '紫陶博物馆拉坯体验（50元，作品可邮寄）', '朝阳楼茶馆听雨' ],
      fog: [ '古城慢行，注意能见度，车速≤30km/h' ]
    }
  },
  {
    day: 3,
    title: '建水 → 元阳梯田（车程约3h）',
    subtitle: '麻栗寨 / 哈尼博物馆 / 阿者科村',
    color: '#f59e0b',
    tips: '山路湿滑，避免临崖急刹',
    pois: [
      { name: '元阳县城', time: '中午', lat: 23.2195, lng: 102.8358 },
      { name: '麻栗寨梯田', time: '下午', lat: 23.0772, lng: 102.7825 },
      { name: '哈尼族博物馆', time: '备选', lat: 23.2272, lng: 102.8202 },
      { name: '阿者科村', time: '傍晚', lat: 23.0817, lng: 102.7785 }
    ],
    weather: {
      sunny: [ '麻栗寨轻徒步（15:00-17:00稻浪）' ],
      rain: [ '元阳县城哈尼博物馆', '火塘鸡煲制作（室内）', '避开老虎嘴临崖路段' ],
      fog: [ '阿者科村探蘑菇房（雾中线条摄影）', '亮色外套+强光手电防低能见度' ]
    }
  },
  {
    day: 4,
    title: '元阳梯田全天',
    subtitle: '多依树 / 全福庄 / 爱春蓝梯田',
    color: '#8b5cf6',
    tips: '清晨景区人多，提前抵达栈道占位',
    pois: [
      { name: '多依树景区·免费栈道', time: '日出', lat: 23.1029, lng: 102.7443 },
      { name: '全福庄梯田', time: '上午', lat: 23.1274, lng: 102.7417 },
      { name: '爱春蓝梯田', time: '上午', lat: 23.0959, lng: 102.7648 }
    ],
    weather: {
      sunny: [ '多依树栈道拍晨光（6:50-7:30）', '全福庄航拍“大地指纹”', '爱春蓝梯田9:00前拍倒影（村民收费5元）' ],
      rain: [ '箐口民俗村学哈尼织布（室内）', '品红米饭宴' ],
      fog: [ '坝达-老鹰嘴雾中栈道徒步（成熟路线约2h）' ]
    }
  },
  {
    day: 5,
    title: '元阳 → 蒙自 → 普者黑（约4h）',
    subtitle: '碧色寨 / 西南联大纪念馆 / 青龙山',
    color: '#ef4444',
    tips: '多弯道且有暴雨预警，限速40km/h；备防雾剂',
    pois: [
      { name: '蒙自·碧色寨', time: '上午', lat: 23.3613, lng: 103.4368 },
      { name: '西南联大纪念馆', time: '中午', lat: 23.3638, lng: 103.3825 },
      { name: '普者黑·青龙山', time: '傍晚', lat: 24.2878, lng: 104.1188 },
      { name: '普者黑·仙人洞村', time: '备选', lat: 24.2965, lng: 104.1177 }
    ],
    weather: {
      sunny: [ '碧色寨租民国装拍铁道光影', '普者黑青龙山登顶' ],
      rain: [ '西南联大纪念馆', '普者黑仙人洞探秘（恒温18℃）' ],
      fog: [ '碧色寨雾中车站大片', '彝家刺绣体验' ]
    }
  },
  {
    day: 6,
    title: '普者黑全天',
    subtitle: '溶洞群 / 苗寨 / 湿地科普',
    color: '#14b8a6',
    tips: '涉水洞段注意防滑，备轻便雨具',
    pois: [
      { name: '普者黑核心湿地入口', time: '上午', lat: 24.283, lng: 104.1197 },
      { name: '菜花箐苗寨', time: '下午', lat: 24.2688, lng: 104.0887 },
      { name: '湿地科普馆', time: '备选', lat: 24.282, lng: 104.114 }
    ],
    weather: {
      sunny: [ '柳叶小舟游溶洞群', '菜花箐苗寨访非遗传承人' ],
      rain: [ '荷风院画扇面+品荷叶茶', '湿地科普馆观鸟纪录片' ],
      fog: [ '仙人洞村制荷叶茶', '彝族村围炉烤鱼听雨' ]
    }
  },
  {
    day: 7,
    title: '普者黑 → 弥勒东风韵',
    subtitle: '万花筒艺术馆 / 葡萄园 / 温泉',
    color: '#f97316',
    tips: '山路转平原路段，注意限速与测速点',
    pois: [
      { name: '东风韵·红砖建筑群', time: '上午', lat: 24.2975, lng: 103.4547 },
      { name: '万花筒艺术馆', time: '中午', lat: 24.297, lng: 103.4562 },
      { name: '葡萄园骑行区', time: '下午', lat: 24.2919, lng: 103.4638 },
      { name: '半山温泉', time: '傍晚', lat: 24.2866, lng: 103.4626 }
    ],
    weather: {
      sunny: [ '万花筒艺术馆创作', '葡萄园骑行采摘（玫瑰蜜8月成熟季）' ],
      rain: [ '美憬阁酒店下午茶', '红酒庄地窖品鉴（68元含3款酒）' ],
      fog: [ '红砖建筑群几何光影拍摄', '半山温泉泡池（198元）' ]
    }
  },
  {
    day: 8,
    title: '弥勒 → 石林 → 昆明',
    subtitle: '石林徒步 / 博物馆 / 斗南花市',
    color: '#22c55e',
    tips: '石林景区14:00后人少，注意补水与防晒',
    pois: [
      { name: '石林景区·剑峰池', time: '下午', lat: 24.8211, lng: 103.3242 },
      { name: '石林·望峰亭', time: '下午', lat: 24.8259, lng: 103.3249 },
      { name: '喀斯特博物馆', time: '备选', lat: 24.8234, lng: 103.3225 },
      { name: '斗南花市·室内馆', time: '晚上', lat: 24.8868, lng: 102.8611 }
    ],
    weather: {
      sunny: [ '石林徒步大环线（剑峰池→望峰亭，14:00后错峰）' ],
      rain: [ '石林喀斯特博物馆（陨石馆+民族壁画）', '斗南花市室内馆' ],
      fog: [ '秘境步道（摩崖石刻→莲花池）避开人流' ]
    }
  },
  {
    day: 9,
    title: '昆明 → 北京',
    subtitle: '弹性收尾',
    color: '#3b82f6',
    tips: '根据返程时间弹性安排，预留机场安检时长',
    pois: [
      { name: '云南省博物馆·青铜馆', time: '上午', lat: 24.9408, lng: 102.7286 },
      { name: '斗南花市·鲜切花', time: '备选', lat: 24.8868, lng: 102.8611 },
      { name: '长水国际机场', time: '返程', lat: 25.1019, lng: 102.9292 }
    ],
    weather: {
      sunny: [ '省博青铜馆（重点看古滇国牛虎铜案）' ],
      rain: [ '斗南花市采购鲜切花（约20元/束）' ],
      fog: [ '市区慢游，机场早出发以防低能见度' ]
    }
  }
];

// AMap integration
const AMapKey = '6c341b2e19a71013ad724ceb283ae185';
// 如果你的高德控制台开启了 Web 安全密钥校验，请在此填入 securityJsCode
const AMapSecurityJsCode = '2c7829c1cd5cf4d83c2175dd40b7dac7';
let map;
const dayLayers = new Map();
let activeDayIndex = 0;

function loadAMap() {
  if (AMapSecurityJsCode) {
    window._AMapSecurityConfig = { securityJsCode: AMapSecurityJsCode };
  }
  return window.AMapLoader.load({
    key: AMapKey,
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.Driving'],
    Loca: { version: '2.0' }
  });
}

function initMap() {
  map = new AMap.Map('map', {
    zoom: 6,
    center: [101.5, 26.3],
    viewMode: '2D'
  });
  map.addControl(new AMap.Scale());
  map.addControl(new AMap.ToolBar());
}

function createNumberedMarker(index, color) {
  const size = 30;
  const html = `
    <div style="width:${size}px;height:${size}px;border-radius:16px;background:${color};
                display:flex;align-items:center;justify-content:center;color:#fff;
                box-shadow:0 4px 10px rgba(0,0,0,.2);font-weight:700;">
      ${index}
    </div>`;
  return new AMap.Marker({
    content: html,
    offset: new AMap.Pixel(-size/2, -size),
    anchor: 'bottom-center'
  });
}

function formatDuration(sec) {
  if (!sec && sec !== 0) return '';
  const h = Math.floor(sec / 3600);
  const m = Math.round((sec % 3600) / 60);
  if (h > 0) return `${h}小时${m}分`;
  return `${m}分`;
}

function getDrivingPolyline(origin, dest, color) {
  return new Promise((resolve) => {
    const trySearch = (policyIndex = 0) => {
      const policies = [AMap.DrivingPolicy.LEAST_TIME, AMap.DrivingPolicy.LEAST_DISTANCE];
      const driving = new AMap.Driving({
        policy: policies[policyIndex] || AMap.DrivingPolicy.LEAST_TIME,
        showTraffic: false,
        autoFitView: false
      });
      
      // 确保坐标格式正确
      const o = origin instanceof AMap.LngLat ? origin : new AMap.LngLat(origin[0], origin[1]);
      const d = dest instanceof AMap.LngLat ? dest : new AMap.LngLat(dest[0], dest[1]);
      
      // 验证坐标有效性
      if (!o || !d || isNaN(o.lng) || isNaN(o.lat) || isNaN(d.lng) || isNaN(d.lat)) {
        console.error('Invalid coordinates:', { origin: o, dest: d });
        const pl = new AMap.Polyline({ 
          path: [o, d], 
          strokeColor: color, 
          strokeWeight: 4, 
          strokeOpacity: 0.6, 
          strokeStyle: 'dashed' 
        });
        resolve({ polyline: pl });
        return;
      }
      
      driving.search(o, d, (status, result) => {
        if (status === 'complete' && result && result.routes && result.routes.length) {
          const steps = result.routes[0].steps || [];
          const path = [];
          steps.forEach(s => { if (s.path) path.push(...s.path); });
          
          if (path.length > 0) {
            const pl = new AMap.Polyline({ 
              path, 
              strokeColor: color, 
              strokeWeight: 5, 
              strokeOpacity: 0.95 
            });
            const midIdx = Math.floor(path.length / 2);
            const mid = path[Math.max(0, midIdx - 1)] || o;
            const dur = formatDuration(result.routes[0].time);
            const text = new AMap.Text({
              text: dur,
              position: mid,
              style: { 
                'background': '#ffffff', 
                'border': '1px solid #e2e8f0', 
                'padding': '2px 6px', 
                'border-radius': '6px', 
                'font-size': '12px', 
                'color': '#0f172a' 
              }
            });
            resolve({ polyline: pl, label: text });
          } else {
            // 如果没有路径数据，使用直线连接
            const pl = new AMap.Polyline({ 
              path: [o, d], 
              strokeColor: color, 
              strokeWeight: 4, 
              strokeOpacity: 0.6, 
              strokeStyle: 'dashed' 
            });
            resolve({ polyline: pl });
          }
        } else if (policyIndex === 0) {
          console.warn('Driving retry with LEAST_DISTANCE. Status:', status, 'Result:', result);
          trySearch(1);
        } else {
          console.warn('Driving search failed, using direct line. Status:', status, 'Result:', result);
          // 使用直线连接作为备选方案
          const pl = new AMap.Polyline({ 
            path: [o, d], 
            strokeColor: color, 
            strokeWeight: 4, 
            strokeOpacity: 0.6, 
            strokeStyle: 'dashed' 
          });
          resolve({ polyline: pl });
        }
      });
    };
    trySearch(0);
  });
}

function renderDayLayers() {
  itinerary.forEach((day, idx) => {
    const group = [];

    day.pois.forEach((poi, i) => {
      const marker = createNumberedMarker(i + 1, day.color);
      marker.setPosition([poi.lng, poi.lat]);
      marker.setTitle(`${poi.name} · ${poi.time}`);
      marker.setLabel({
        direction: 'right',
        offset: new AMap.Pixel(6, -4),
        content: `<div style="background:#fff;border:1px solid #e2e8f0;padding:4px 6px;border-radius:6px;font-size:12px;white-space:nowrap;">${poi.name}</div>`
      });
      group.push(marker);
    });

    dayLayers.set(idx, group);

    // build driving routes asynchronously between consecutive POIs
    (async () => {
      for (let i = 0; i < day.pois.length - 1; i++) {
        const a = day.pois[i];
        const b = day.pois[i + 1];
        const origin = [a.lng, a.lat];
        const dest = [b.lng, b.lat];
        try {
          const res = await getDrivingPolyline(origin, dest, day.color);
          if (res.polyline) group.push(res.polyline);
          if (res.label) group.push(res.label);
          if (activeDayIndex === idx) {
            const toAdd = [];
            if (res.polyline) toAdd.push(res.polyline);
            if (res.label) toAdd.push(res.label);
            if (toAdd.length) map.add(toAdd);
            // adjust view slightly after first segment drawn
            if (i === 0) map.setFitView(group, false, [60, 160, 40, 280]);
          }
        } catch (_) {
          // ignore
        }
      }
    })();
  });
}

function setActiveDay(idx, fit = true) {
  // clear
  dayLayers.forEach((group) => {
    group.forEach((o) => map.remove(o));
  });

  const group = dayLayers.get(idx);
  if (group) {
    map.add(group);
    if (fit) {
      const bounds = new AMap.Bounds();
      group.forEach((o) => {
        if (o.getPath) {
          o.getPath().forEach((p) => bounds.extend(p));
        } else if (o.getPosition) {
          bounds.extend(o.getPosition());
        }
      });
      if (bounds) map.setFitView(group, false, [60, 160, 40, 280]);
    }
  }
  activeDayIndex = idx;
  document.querySelectorAll('.day-tab').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

function renderTabs() {
  const tabs = document.getElementById('dayTabs');
  tabs.innerHTML = '';
  itinerary.forEach((d, idx) => {
    const btn = document.createElement('button');
    btn.className = 'day-tab';
    btn.textContent = `D${d.day}`;
    btn.addEventListener('click', () => setActiveDay(idx));
    tabs.appendChild(btn);
  });
}

function renderBottomSheet() {
  const sheetBody = document.getElementById('sheetBody');
  const tpl = document.getElementById('dayCardTpl');
  sheetBody.innerHTML = '';
  itinerary.forEach((d, idx) => {
    const node = tpl.content.cloneNode(true);
    node.querySelector('.badge').textContent = `D${d.day}`;
    node.querySelector('.day-title').textContent = d.title;
    node.querySelector('.day-subtitle').textContent = d.subtitle;
    node.querySelector('.badge').style.background = d.color;
    node.querySelector('[data-action="focus"]').addEventListener('click', () => setActiveDay(idx));

    // weather selector
    const weatherWrap = document.createElement('div');
    weatherWrap.className = 'weather-section';
    const pills = document.createElement('div');
    pills.className = 'weather-pills';
    const content = document.createElement('div');
    content.className = 'weather-content';
    const plansUl = document.createElement('ul');
    plansUl.className = 'plan-list';
    content.appendChild(plansUl);

    const weatherKinds = [
      { key: 'sunny', label: '☀️ 晴' },
      { key: 'rain', label: '🌧️ 雨' },
      { key: 'fog', label: '🌫️ 雾' }
    ];
    let currentWeather = 'sunny';

    function renderPlans(kind) {
      plansUl.innerHTML = '';
      const items = (d.weather && d.weather[kind]) || [];
      if (d.tips) {
        const liTip = document.createElement('li');
        liTip.style.color = '#64748b';
        liTip.textContent = `驾驶/安全提示：${d.tips}`;
        plansUl.appendChild(liTip);
      }
      items.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        plansUl.appendChild(li);
      });
    }

    weatherKinds.forEach((w, i) => {
      const pill = document.createElement('button');
      pill.className = 'weather-pill' + (i === 0 ? ' active' : '');
      pill.textContent = w.label;
      pill.addEventListener('click', () => {
        currentWeather = w.key;
        pills.querySelectorAll('.weather-pill').forEach(el => el.classList.remove('active'));
        pill.classList.add('active');
        renderPlans(currentWeather);
      });
      pills.appendChild(pill);
    });
    weatherWrap.appendChild(pills);
    weatherWrap.appendChild(content);
    node.querySelector('.day-card').appendChild(weatherWrap);
    renderPlans(currentWeather);

    const ul = node.querySelector('.poi-list');
    d.pois.forEach((poi, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="idx">${i + 1}</div>
        <div class="name">${poi.name}</div>
        <div class="time">${poi.time}</div>
      `;
      li.addEventListener('click', () => {
        setActiveDay(idx, false);
        map.setZoomAndCenter(12, [poi.lng, poi.lat]);
      });
      ul.appendChild(li);
    });

    sheetBody.appendChild(node);
  });
}

function setupSheet() {
  const sheet = document.getElementById('bottomSheet');
  const handle = document.getElementById('sheetHandle');
  let startY = 0;
  let startTranslate = 0;
  const getTranslate = () => (sheet.classList.contains('expanded') ? 0 : 45);
  const setTranslate = (v) => { const c = Math.max(0, Math.min(45, v)); sheet.style.transform = `translateY(${c}%)`; };
  const commit = (v) => { sheet.style.transform = ''; if (v < 22.5) sheet.classList.add('expanded'); else sheet.classList.remove('expanded'); };
  const onStart = (y) => { startY = y; startTranslate = getTranslate(); sheet.style.transition = 'none'; };
  const onMove = (y) => setTranslate(startTranslate + (y - startY) / 6);
  const onEnd = (y) => { sheet.style.transition = ''; commit(startTranslate + (y - startY) / 6); };
  handle.addEventListener('touchstart', (e) => onStart(e.touches[0].clientY), { passive: true });
  handle.addEventListener('touchmove', (e) => onMove(e.touches[0].clientY), { passive: true });
  handle.addEventListener('touchend', (e) => onEnd(e.changedTouches[0].clientY));
  handle.addEventListener('mousedown', (e) => onStart(e.clientY));
  window.addEventListener('mousemove', (e) => { if (startY) onMove(e.clientY); });
  window.addEventListener('mouseup', (e) => { if (startY) { onEnd(e.clientY); startY = 0; } });
}

function setupGlobalActions() {
  document.getElementById('locateBtn').addEventListener('click', () => {
    if (!navigator.geolocation) return alert('当前设备不支持定位');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const marker = new AMap.CircleMarker({ center: [longitude, latitude], radius: 8, strokeColor: '#0ea5e9', fillColor: '#0ea5e9', fillOpacity: 0.9 });
        map.add(marker);
        marker.setLabel({ content: '<div style="color:#0ea5e9;font-size:12px;background:#fff;border:1px solid #bfdbfe;padding:2px 4px;border-radius:4px;">我的位置</div>', direction: 'top' });
        map.setZoomAndCenter(12, [longitude, latitude]);
      },
      () => alert('无法获取定位权限'),
      { enableHighAccuracy: true, timeout: 5000 }
    );
  });

  document.getElementById('fitAllBtn').addEventListener('click', () => {
    const group = [];
    dayLayers.forEach((g) => group.push(...g));
    if (group.length) map.setFitView(group, false, [60, 160, 40, 280]);
  });

  document.getElementById('toggleDaysBtn').addEventListener('click', (e) => {
    const showAll = e.currentTarget.dataset.all !== '1';
    e.currentTarget.dataset.all = showAll ? '1' : '0';
    e.currentTarget.textContent = showAll ? '仅看当天' : '显示全部天数';

    // toggle groups
    dayLayers.forEach((g, idx) => {
      g.forEach((o) => map.remove(o));
      if (showAll || idx === activeDayIndex) map.add(g);
    });

    const group = [];
    dayLayers.forEach((g, idx) => {
      if (showAll || idx === activeDayIndex) group.push(...g);
    });
    if (group.length) map.setFitView(group, false, [60, 160, 40, 280]);
  });
}

// 添加加载状态提示
function showLoadingStatus(message) {
  const mapContainer = document.getElementById('map');
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading-status';
  loadingDiv.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: center;
    z-index: 1000;
    font-size: 14px;
    color: #0f172a;
  `;
  loadingDiv.innerHTML = `
    <div style="margin-bottom: 10px;">
      <div style="width: 20px; height: 20px; border: 2px solid #e2e8f0; border-top: 2px solid #0ea5e9; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
    </div>
    <div>${message}</div>
  `;
  
  // 添加旋转动画
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
  document.head.appendChild(style);
  
  mapContainer.appendChild(loadingDiv);
  return loadingDiv;
}

function hideLoadingStatus() {
  const loadingDiv = document.getElementById('loading-status');
  if (loadingDiv) {
    loadingDiv.remove();
  }
}

function showErrorStatus(message) {
  const mapContainer = document.getElementById('map');
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: center;
    z-index: 1000;
    font-size: 14px;
    color: #dc2626;
    max-width: 300px;
  `;
  errorDiv.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 10px;">⚠️</div>
    <div style="font-weight: 600; margin-bottom: 8px;">地图加载失败</div>
    <div style="color: #64748b; font-size: 12px; line-height: 1.4;">${message}</div>
    <button onclick="location.reload()" style="
      margin-top: 12px;
      padding: 8px 16px;
      background: #0ea5e9;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
    ">重新加载</button>
  `;
  mapContainer.appendChild(errorDiv);
}

// Bootstrap
renderTabs();
renderBottomSheet();

const loadingStatus = showLoadingStatus('正在加载高德地图...');

loadAMap()
  .then(() => {
    hideLoadingStatus();
    const mapLoadingStatus = showLoadingStatus('正在初始化地图...');
    
    try {
      initMap();
      hideLoadingStatus();
      
      const routeLoadingStatus = showLoadingStatus('正在生成路线规划...');
      renderDayLayers();
      setActiveDay(0);
      setupSheet();
      setupGlobalActions();
      initQixiEffects(); // 初始化七夕特效
      
      // 延迟隐藏加载状态，让用户看到路线正在生成
      setTimeout(() => {
        hideLoadingStatus();
      }, 2000);
      
    } catch (error) {
      hideLoadingStatus();
      console.error('地图初始化失败:', error);
      showErrorStatus('地图初始化失败，请刷新页面重试');
    }
  })
  .catch((error) => {
    hideLoadingStatus();
    console.error('高德地图加载失败:', error);
    showErrorStatus('高德地图加载失败，可能是网络问题或API Key配置问题。请检查网络连接后重试。');
  });

// 七夕主题特效
function initQixiEffects() {
  // 创建爱心飘落动画
  createHeartFall();
  
  // 显示七夕祝福横幅
  showQixiBanner();
  
  // 添加浪漫的地图标记样式
  addRomanticMapStyles();
}

function createHeartFall() {
  const heartsContainer = document.getElementById('heartsContainer');
  const heartSymbols = ['💖', '💕', '💗', '💝', '💘', '❤️', '🌹'];
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // 随机位置和大小
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // 动画结束后移除元素
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 8000);
  }
  
  // 每隔一段时间创建新的爱心
  setInterval(createHeart, 800);
  
  // 初始创建几个爱心
  for (let i = 0; i < 3; i++) {
    setTimeout(createHeart, i * 300);
  }
}

function showQixiBanner() {
  const banner = document.getElementById('qixiBanner');
  
  // 随机更换祝福语
  const blessings = [
    '愿你在云南的每一天都充满美好与惊喜',
    '七夕快乐！愿你的云南之旅如诗如画',
    '山水为伴，星月同行，愿你旅途平安快乐',
    '在最美的风景里，遇见最好的自己',
    '云南七日，每一天都是你的专属回忆'
  ];
  
  let currentIndex = 0;
  const blessingText = banner.querySelector('.blessing-text');
  
  function changeBlessingText() {
    blessingText.style.opacity = '0';
    setTimeout(() => {
      blessingText.textContent = blessings[currentIndex];
      blessingText.style.opacity = '1';
      currentIndex = (currentIndex + 1) % blessings.length;
    }, 500);
  }
  
  // 每10秒更换一次祝福语
  setInterval(changeBlessingText, 10000);
  
  // 添加点击事件
  banner.addEventListener('click', () => {
    banner.style.transform = 'translateX(-50%) scale(1.1)';
    setTimeout(() => {
      banner.style.transform = 'translateX(-50%) scale(1)';
    }, 200);
  });
}

function addRomanticMapStyles() {
  // 为地图添加浪漫的样式效果
  if (map) {
    // 可以在这里添加地图的浪漫主题样式
    console.log('🌹 七夕浪漫主题已启用 🌹');
  }
}


