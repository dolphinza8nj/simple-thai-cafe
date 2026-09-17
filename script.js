(function () {
  var steps = [
    { key: 'drink', en: 'What would you like to drink?', thai: 'ลูกค้าเอาน้ำอะไรคะ', roman: 'lûuk-káa āo nám à-rāi ká', options: [
      { value: 'มัทฉะ', thai: 'มัทฉะ', en: 'Matcha', romanization: 'mát-chà', color: '#5f7d3a', price: 65  },
      { value: 'ชาไทย', thai: 'ชาไทย', en: 'Thai tea', romanization: 'chāa-tāi', color: '#e2823a', price: 55 },
      { value: 'กาแฟ', thai: 'กาแฟ', en: 'Coffee', romanization: 'gāa-fāae', color: '#6f4e37', price: 50 },
      { value: 'ชามะนาว', thai: 'ชามะนาว', en: 'Lime tea', romanization: 'chāa-má-nāao', color: '#c9a13a', price: 45 },
      { value: 'ชานม', thai: 'ชานม', en: 'Milk tea', romanization: 'chāa-nōm', color: '#c99a6c', price: 55 },
      { value: 'น้ำส้ม', thai: 'น้ำส้ม', en: 'Orange juice', romanization: 'nám-sôm', color: '#f2a33e', price: 50 },
      { value: 'น้ำเปล่า', thai: 'น้ำเปล่า', en: 'Water', romanization: 'nám-bplào', color: '#ffffff', price: 10 }
    ]},
    { key: 'qty', en: 'How many do you want?', thai: 'รับกี่แก้วคะ', roman: 'ráp gìi gâaew ká', options: [
      { value: '1', thai: 'หนึ่ง', romanization: 'nèung' },
      { value: '2', thai: 'สอง', romanization: 'sǎwng' },
      { value: '3', thai: 'สาม', romanization: 'sǎam' },
      { value: '4', thai: 'สี่', romanization: 'sìi' },
      { value: '5', thai: 'ห้า', romanization: 'hâa' }
    ]},
    { key: 'temp', en: 'Hot, iced, or blended?', thai: 'ร้อน เย็น หรือปั่นดีคะ', roman: 'ráwn yēn rěeu bpàn dīi ká', options: [
      { value: 'Hot', thai: 'ร้อน', romanization: 'ráwn' },
      { value: 'Iced', thai: 'เย็น', romanization: 'yēn' },
      { value: 'Blended', thai: 'ปั่น', romanization: 'bpàn' }
    ]},
    { key: 'sweet', en: 'How sweet would you like it?', thai: 'หวานเท่าไรคะ', roman: 'wǎan tâo-rāi ká', options: [
      { value: 'No sweet', thai: 'ไม่หวาน', romanization: 'mâi-wǎan' },
      { value: 'Less sweet', thai: 'หวานน้อย', romanization: 'wǎan-nói' },
      { value: 'Regular sweet', thai: 'หวานปกติ', romanization: 'wǎan-bpòk-gà-dtì' },
      { value: 'Extra sweet', thai: 'หวานมาก', romanization: 'wǎan-mâak' }
    ]},
    { key: 'size', en: 'What size would you like it?', thai: 'เอาไซส์ไหนดีคะ', roman: 'āo sāi nǎi dīi ká', options: [
      { value: 'Small', thai: 'ไซส์เล็ก', romanization: 'sāi-lék', price: -10, scale: 0.82 },
      { value: 'Medium', thai: 'ไซส์กลาง', romanization: 'sāi-glāang', price: -5, scale: 0.92 },
      { value: 'Regular', thai: 'ไซส์ปกติ', romanization: 'sāi-bpòk-gà-dtì', price: 0, scale: 1 },
      { value: 'Large', thai: 'ไซส์ใหญ่', romanization: 'sāi-yài', price: 15, scale: 1.15 }
    ]},
    { key: 'dine', en: 'Here or take away?', thai: 'ทานที่นี่หรือกลับบ้านคะ', roman: 'tāan-tîi-nîi rěeu glàp-bâan ká', options: [
      { value: 'Here', thai: 'ทานที่นี่', romanization: 'tāan-tîi-nîi' },
      { value: 'Take away', thai: 'กลับบ้าน', romanization: 'glàp-bâan' }
    ]},
    { key: 'ice', en: 'Would you like lots of ice in that?', thai: 'เอาใส่น้ำแข็งเยอะไหมคะ', roman: 'āo sài náam-kěng yóe mǎi ká',
      showIf: function (s) { return s.temp !== 'Hot'; },
      options: [
        { value: 'Less ice', thai: 'น้ำแข็งน้อย', romanization: 'nám-kǎeng-nói', cubes: 1 },
        { value: 'Regular ice', thai: 'น้ำแข็งปกติ', romanization: 'nám-kǎeng-bpòk-gà-dtì', cubes: 2 },
        { value: 'Extra ice', thai: 'น้ำแข็งเยอะ', romanization: 'nám-kǎeng-yóe', cubes: 3 }
      ]},
    { key: 'milkChange', en: 'Can I change the milk?', thai: 'เปลี่ยนนมได้ไหมคะ', roman: 'bplìian nōm dâi mǎi ká', options: [
      { value: 'Can change', thai: 'เปลี่ยนได้', romanization: 'bplìian-dâi' },
      { value: 'Cannot change', thai: 'เปลี่ยนไม่ได้', romanization: 'bplìian mâi dâi' }
    ]},
    { key: 'milk', en: 'What kind of milk would you like?', thai: 'นมอะไรดีคะ', roman: 'nōm à-rāi dīi ká',
      showIf: function (s) { return s.milkChange === 'Can change'; },
      options: [
        { value: 'Milk', thai: 'นม', en: 'Regular milk', romanization: 'nōm', price: 0 },
        { value: 'Oat milk', thai: 'นมโอ๊ต', romanization: 'nōm-óoht', price: 15 },
        { value: 'Soy milk', thai: 'นมถั่วเหลือง', romanization: 'nōm-tùua-lěuuang', price: 10 },
        { value: 'Almond milk', thai: 'นมอัลมอนด์', romanization: 'nōm-ān-māwn', price: 15 }
      ]},
    { key: 'pay', en: 'How would you like to pay?', thai: 'จ่ายแบบไหนคะ', roman: 'jàai bàep-nǎi ká', options: [
      { value: 'Credit card', thai: 'บัตรเครดิต', romanization: 'bàt-krēe-dìt' },
      { value: 'Scan QR Code', thai: 'สแกน QR โค๊ต', romanization: 'sà-gāen QR kóot' },
      { value: 'Cash', thai: 'เงินสด', romanization: 'ngōen-sòt' }
    ]}
  ];

  var state = {};
  var current = 0; // 0..steps.length-1 = questions, steps.length = review

  var wizardEl = document.getElementById('wizard');
  var liquidRect = document.getElementById('liquidRect');
  var liquidSurface = document.getElementById('liquidSurface');
  var liquidStopTop = document.getElementById('liquidStopTop');
  var liquidStopBottom = document.getElementById('liquidStopBottom');
  var cupFigure = document.getElementById('cupSvg');
  var cupCaption = document.getElementById('cupCaption');
  var steamGroup = document.getElementById('steamGroup');
  var lidGroup = document.getElementById('lidGroup');
  var sleeve = document.getElementById('sleeve');
  var straw = document.getElementById('straw');
  var bubbleGroup = document.getElementById('bubbleGroup');
  var condensationGroup = document.getElementById('condensationGroup');
  var iceEls = [document.getElementById('ice1'), document.getElementById('ice2'), document.getElementById('ice3')];

  var CUP_TOP = 52, CUP_BOTTOM = 274; // interior y-range in svg units
  var TOP_HALF_WIDTH = 56, BOTTOM_HALF_WIDTH = 43; // cup tapers, widest at the rim

  function visibleSteps() {
    return steps.filter(function (s) { return !s.showIf || s.showIf(state); });
  }

  function answeredCount() {
    return visibleSteps().reduce(function (n, s) { return n + (state[s.key] ? 1 : 0); }, 0);
  }

  function nextIndex(fromIndex) {
    var i = fromIndex + 1;
    while (i < steps.length && steps[i].showIf && !steps[i].showIf(state)) i++;
    return i;
  }

  function prevIndex(fromIndex) {
    var i = fromIndex - 1;
    while (i >= 0 && steps[i].showIf && !steps[i].showIf(state)) i--;
    return i;
  }

  function findOption(stepKey, value) {
    var step = steps.filter(function (s) { return s.key === stepKey; })[0];
    if (!step) return null;
    return step.options.filter(function (o) { return o.value === value; })[0] || null;
  }

  // lighten (positive percent) or darken (negative) a hex color, for the liquid's gradient
  function shadeColor(hex, percent) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    var num = parseInt(hex, 16);
    var amt = Math.round(2.55 * percent);
    var r = Math.min(255, Math.max(0, (num >> 16) + amt));
    var g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amt));
    var b = Math.min(255, Math.max(0, (num & 0xff) + amt));
    return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
  }

  function halfWidthAt(y) {
    var frac = (y - CUP_TOP) / (CUP_BOTTOM - CUP_TOP);
    return TOP_HALF_WIDTH + (BOTTOM_HALF_WIDTH - TOP_HALF_WIDTH) * frac;
  }

  function updateCup() {
    var progress = answeredCount() / visibleSteps().length;
    var liquidHeight = (CUP_BOTTOM - CUP_TOP) * progress;
    var surfaceY = CUP_BOTTOM - liquidHeight;
    liquidRect.setAttribute('y', surfaceY);
    liquidRect.setAttribute('height', liquidHeight);

    liquidSurface.setAttribute('cy', surfaceY);
    liquidSurface.setAttribute('rx', halfWidthAt(surfaceY) - 3);
    liquidSurface.classList.toggle('hidden-part', progress <= 0.02);

    var drinkOpt = state.drink ? findOption('drink', state.drink) : null;
    var baseColor = drinkOpt ? drinkOpt.color : '#c9c2ab';
    liquidStopTop.setAttribute('stop-color', shadeColor(baseColor, 22));
    liquidStopBottom.setAttribute('stop-color', shadeColor(baseColor, -16));

    var sizeOpt = state.size ? findOption('size', state.size) : null;
    cupFigure.style.transform = 'scale(' + (sizeOpt ? sizeOpt.scale : 1) + ')';

    var isHot = state.temp === 'Hot';
    var isIced = state.temp === 'Iced';
    var isBlended = state.temp === 'Blended';
    steamGroup.classList.toggle('hidden-part', !isHot);
    straw.classList.toggle('hidden-part', !(isIced || isBlended));
    bubbleGroup.classList.toggle('hidden-part', !isBlended);
    condensationGroup.classList.toggle('hidden-part', !(isIced || isBlended));

    var iceOpt = state.ice ? findOption('ice', state.ice) : null;
    var cubeCount = (iceOpt && !isHot) ? iceOpt.cubes : 0;
    iceEls.forEach(function (el, i) { el.classList.toggle('hidden-part', i >= cubeCount); });

    var isTakeAway = state.dine === 'Take away';
    lidGroup.classList.toggle('hidden-part', !isTakeAway);
    sleeve.classList.toggle('hidden-part', !isTakeAway);

    if (!state.drink) {
      cupCaption.textContent = 'your drink will fill up as you answer';
    } else {
      var drinkEn = drinkOpt && drinkOpt.en ? ' (' + drinkOpt.en + ')' : '';
      var parts = [state.drink + drinkEn];

      if (state.qty) parts.push(state.qty + (state.qty === '1' ? ' cup' : ' cups'));
      if (state.temp) parts.push(state.temp.toLowerCase());
      var sweetOpt = state.sweet ? findOption('sweet', state.sweet) : null;
      if (sweetOpt) parts.push(sweetOpt.value.toLowerCase());
      if (sizeOpt) parts.push(sizeOpt.value.toLowerCase());
      if (state.dine === 'Take away') parts.push('to go');
      else if (state.dine === 'Here') parts.push('for here');
      if (iceOpt) parts.push(iceOpt.value.toLowerCase());
      if (state.milkChange === 'Can change' && state.milk) {
        var milkOpt = findOption('milk', state.milk);
        parts.push((milkOpt.en || milkOpt.value).toLowerCase());
      }
      var payOpt = state.pay ? findOption('pay', state.pay) : null;
      if (payOpt) parts.push('paying by ' + payOpt.value.toLowerCase());

      cupCaption.textContent = parts.join(' · ');
    }
  }

  function total() {
    var base = state.drink ? (findOption('drink', state.drink).price || 0) : 0;
    var sizeMod = state.size ? (findOption('size', state.size).price || 0) : 0;
    var milkMod = state.milk ? (findOption('milk', state.milk).price || 0) : 0;
    var qty = state.qty ? parseInt(state.qty, 10) : 1;
    return (base + sizeMod + milkMod) * qty;
  }

  function renderQuestion(index) {
    var step = steps[index];
    var visible = visibleSteps();
    var posInVisible = visible.indexOf(step) + 1;
    var totalVisible = visible.length;
    var pct = Math.round((answeredCount() / totalVisible) * 100);
    var prevIdx = prevIndex(index);
    var nextIdx = nextIndex(index);

    var html = '';
    html += '<div class="progress-row">';
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<div class="progress-label">' + posInVisible + ' / ' + totalVisible + '</div>';
    html += '</div>';
    html += '<div class="q-eng">' + step.en + '</div>';
    html += '<h2 class="q-title">' + posInVisible + '. ' + step.thai + '</h2>';
    html += '<div class="q-roman">' + step.roman + '</div>';
    html += '<div class="options" role="group" aria-label="' + step.en + '">';
    step.options.forEach(function (opt) {
      var pressed = state[step.key] === opt.value;
      var meta = '';
      if (typeof opt.price === 'number' && opt.price !== 0) {
        meta = (opt.price > 0 ? '+' : '−') + '฿' + Math.abs(opt.price);
      } else if (typeof opt.price === 'number') {
        meta = '฿0';
      }
      html += '<button type="button" class="opt-btn" data-value="' + opt.value + '" aria-pressed="' + pressed + '">' +
        '<span class="label">' + opt.thai + '</span>' + '<span class="romanization">' + opt.romanization + '</span>' +
        (meta ? '<span class="meta">' + meta + '</span>' : '') +
        '</button>';
    });
    html += '</div>';
    html += '<div class="nav-row">';
    html += '<button type="button" class="nav-btn" id="backBtn" ' + (prevIdx < 0 ? 'disabled' : '') + '>กลับ</button>';
    html += '<button type="button" class="nav-btn primary" id="nextBtn" ' + (state[step.key] ? '' : 'disabled') + '>' +
      (nextIdx >= steps.length ? 'Review order' : 'ต่อไป') + '</button>';
    html += '</div>';

    wizardEl.innerHTML = html;

    wizardEl.querySelectorAll('.opt-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state[step.key] = btn.getAttribute('data-value');
        // drop answers for any step that just became inapplicable (e.g. milk type
        // when the customer says the milk can't be changed), so a stale choice
        // can't silently add its price or reappear in the review
        steps.forEach(function (s) {
          if (s.showIf && !s.showIf(state)) delete state[s.key];
        });
        updateCup();
        renderQuestion(index); // re-render this step to show selection + enable Next
      });
    });
    document.getElementById('backBtn').addEventListener('click', function () {
      var target = prevIndex(index);
      if (target >= 0) { current = target; renderQuestion(current); }
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
      var target = nextIndex(index);
      if (target < steps.length) { current = target; renderQuestion(current); }
      else { current = steps.length; renderReview(); }
    });
  }

  function renderReview() {
    var html = '';
    html += '<div class="progress-row">';
    html += '<div class="progress-track"><div class="progress-fill" style="width:100%"></div></div>';
    html += '<div class="progress-label">Ready</div>';
    html += '</div>';
    html += '<div class="q-eng">รับออเดอร์เรียบร้อยค่ะ</div>';
    html += '<h2 class="q-title">Review your order</h2>';
    html += '<div class="review-list">';
    visibleSteps().forEach(function (s) {
      var opt = state[s.key] ? findOption(s.key, state[s.key]) : null;
      if (!opt) {
        html += '<div class="review-item"><div class="review-line"><span class="k">' + s.thai + '</span><span class="v">—</span></div></div>';
        return;
      }
      var enText = opt.en || opt.value;
      html += '<div class="review-item">' +
        '<div class="review-line"><span class="k">' + s.thai + '</span><span class="v">' + opt.thai + ' <i class="v-roman">' + opt.romanization + '</i></span></div>' +
        '<div class="review-line review-line-en"><span class="k">' + s.en.replace(/\?$/, '') + '</span><span class="v">' + enText + '</span></div>' +
        '</div>';
    });
    html += '</div>';
    html += '<div class="review-total"><span class="label">Total</span><span class="amount">฿' + total() + '</span></div>';
    html += '<div class="nav-row">';
    html += '<button type="button" class="nav-btn" id="backBtn">Back</button>';
    html += '<button type="button" class="nav-btn primary" id="placeBtn">Place order</button>';
    html += '</div>';
    html += '<div id="confirmBox"></div>';

    wizardEl.innerHTML = html;

    document.getElementById('backBtn').addEventListener('click', function () {
      current = steps.length - 1; renderQuestion(current);
    });
    document.getElementById('placeBtn').addEventListener('click', function () {
      document.getElementById('confirmBox').innerHTML =
        '<div class="confirm"><span class="stamp">ORDER PLACED</span>' +
        '<span>' + (state.drink || 'Your drink') + ', paying by ' + (state.pay ? state.pay.toLowerCase() : '—') + '</span></div>';
    });
  }

  document.getElementById('restartBtn').addEventListener('click', function () {
    state = {};
    current = 0;
    updateCup();
    renderQuestion(0);
  });

  updateCup();
  renderQuestion(0);
})();