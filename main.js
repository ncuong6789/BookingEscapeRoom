const roomsData = [
  {
    "id": "phong-lien",
    "url": "https://insidexcape.vn/phong-lien/",
    "brand": "inside",
    "name": "Liên",
    "img": "https://insidexcape.vn/wp-content/uploads/2022/05/Cover-Lien.jpg",
    "desc": "Với những tình tiết: Một căn phòng tại khu phố Khâm Thiên, Hà Nội. Một vụ mất tích bí ẩn, không dấu vết của một gia đình...",
    "players": "2-8",
    "difficulty": "Rất Khó",
    "price": "Từ 150K - 190K"
  },
  {
    "id": "phong-xom-tro",
    "url": "https://insidexcape.vn/phong-xom-tro/",
    "brand": "inside",
    "name": "Xóm Trọ",
    "img": "https://insidexcape.vn/wp-content/uploads/2022/05/Cover-Xom.jpg",
    "desc": "XÓM TRỌ - Nghi thức bóng tối sắp bắt đầu bạn sẵn sàng chưa? Trong vai một nhóm pháp sư, bạn và đồng đội cùng nhận được lời báo mộng kỳ lạ.",
    "players": "2-8",
    "difficulty": "Khó",
    "price": "Từ 150K - 190K"
  },
  {
    "id": "phong-am-hon",
    "url": "https://insidexcape.vn/phong-am-hon/",
    "brand": "inside",
    "name": "Âm Hôn",
    "img": "https://insidexcape.vn/wp-content/uploads/2022/05/Cover-Am-hon.jpg",
    "desc": "Cốt truyện dựa trên HỦ TỤC ĐÁM CƯỚI MA. Phòng chơi với DIỆN TÍCH LỚN NHẤT tái hiện căn nhà miền Tây những năm 1970. Với 3 nhân vật phụ.",
    "players": "4-10",
    "difficulty": "Kinh Hoàng",
    "price": "Từ 150K - 190K"
  },
  {
    "id": "zone4",
    "url": "https://insidexcape.vn/zone4/",
    "brand": "inside",
    "name": "Zone 4",
    "img": "https://insidexcape.vn/wp-content/uploads/2023/01/Poster-Zone-04-full-1-683x1024.jpg",
    "desc": "Zone 4 - Phòng Thí Nghiệm - Vào vai một nhóm thực tập sinh chuẩn bị tốt nghiệp. Những tưởng mọi thứ sẽ diễn ra tốt đẹp...",
    "players": "4-10",
    "difficulty": "Khó",
    "price": "Từ 150K - 190K"
  },
  {
    "id": "zone5",
    "url": "https://insidexcape.vn/zone5/",
    "brand": "inside",
    "name": "Đêm Kinh Hoàng",
    "img": "https://insidexcape.vn/wp-content/uploads/2023/06/350119583_1424949865013641_4760705781631182338_n.jpg",
    "desc": "Đêm Kinh Hoàng INSIDE XCAPE ROOM. Thoát khỏi khu vực cấm địa đầy rẫy nguy hiểm.",
    "players": "4-12",
    "difficulty": "Kinh Hoàng",
    "price": "Từ 150K - 190K"
  },
  {
    "id": "di-chung",
    "url": "https://masterescape.vn/services/di-chung/",
    "brand": "master",
    "name": "DỊ CHỦNG",
    "img": "https://masterescape.vn/wp-content/uploads/2026/02/dichung.jpg",
    "desc": "Cả nhóm bạn vừa tỉnh dậy sau một giấc ngủ dài. Tiếng đập cửa ầm ĩ từ người bảo vệ. Họ phát hiện nơi này là một khu căn hộ với màu xanh kì lạ...",
    "players": "4-10",
    "difficulty": "Kinh Dị",
    "price": "169K - 299K/NG"
  },
  {
    "id": "nhap-trang",
    "url": "https://masterescape.vn/services/nhap-trang/",
    "brand": "master",
    "name": "NHẬP TRÀNG",
    "img": "https://masterescape.vn/wp-content/uploads/2026/02/nhaptrang-4.jpg",
    "desc": "Căn hộ chung cư cũ giữa lòng Sài Gòn vốn là tổ ấm của gia đình 3 người: Huy, Linh cùng cô con gái nhỏ An. Biến cố xảy ra từ ngày Linh ra đi...",
    "players": "4-10",
    "difficulty": "Rùng Rợn",
    "price": "169K - 299K/NG"
  },
  {
    "id": "bich-nu",
    "url": "https://masterescape.vn/services/bich-nu/",
    "brand": "master",
    "name": "BÍCH NỮ",
    "img": "https://masterescape.vn/wp-content/uploads/2025/01/Poster-1-scaled.png",
    "desc": "Hối tiếc nhất của sư phụ trước khi mất là chưa thể tìm lại được người em gái thất lạc năm xưa. Vì muốn hoàn thành di nguyện của sư phụ nên nhóm...",
    "players": "4-8",
    "difficulty": "Hồi Hộp",
    "price": "169K - 299K/NG"
  },
  {
    "id": "quy-do",
    "url": "https://masterescape.vn/services/quy-do/",
    "brand": "master",
    "name": "Qủy Đỏ",
    "img": "https://masterescape.vn/wp-content/uploads/2024/11/d965c9a9-6175-4c34-95d0-c5b493f5e41b.png",
    "desc": "Trong vai nhóm bạn của San, khi mọi người đang tham gia leo núi, gặp thời tiết xấu kèm trời đã tối dần nên mọi người không thể rời khỏi nơi đây...",
    "players": "4-8",
    "difficulty": "Cực Khó",
    "price": "169K - 299K/NG"
  },
  {
    "id": "ba-dong-the-medium",
    "url": "https://masterescape.vn/services/ba-dong-the-medium/",
    "brand": "master",
    "name": "Bà Đồng",
    "img": "https://masterescape.vn/wp-content/uploads/2017/11/ba-dong.png",
    "desc": "Trong kí ức của Hoà, má chỉ tồn tại trong những lời trách móc từ mọi người, kể cả mấy anh chị của Hoà. Vốn là một bà đồng có tiếng lại vì dùng tà chú...",
    "players": "4-8",
    "difficulty": "Tâm Linh",
    "price": "169K - 299K/NG"
  },
  {
    "id": "nha-xac-the-morgue",
    "url": "https://masterescape.vn/services/nha-xac-the-morgue/",
    "brand": "master",
    "name": "Nhà Xác",
    "img": "https://masterescape.vn/wp-content/uploads/2017/11/nha-xac.png",
    "desc": "Sau khi tốt nghiệp loại xuất sắc ở Đại học Y dược, các bạn là những sinh viên được tuyển về làm việc tại phòng giám định pháp y trực thuộc bệnh viện...",
    "players": "4-8",
    "difficulty": "Ám Ảnh",
    "price": "169K - 299K/NG"
  },
  {
    "id": "diet-vong-extinction",
    "url": "https://masterescape.vn/services/diet-vong-extinction/",
    "brand": "master",
    "name": "DIỆT VONG",
    "img": "https://masterescape.vn/wp-content/uploads/2017/11/diet-vong.png",
    "desc": "Trái Đất xảy ra thảm hoạ diệt vong, loại người bắt buộc phải đi tìm sự sống ở một hành tinh khác. Nhưng sau nhiều thế kỷ rời khỏi Trái Đất, loài người...",
    "players": "4-10",
    "difficulty": "Hành Động",
    "price": "169K - 299K/NG"
  },
  {
    "id": "ki-tuc-xa-the-promise",
    "url": "https://masterescape.vn/services/ki-tuc-xa-the-promise/",
    "brand": "master",
    "name": "KÍ TÚC XÁ",
    "img": "https://masterescape.vn/wp-content/uploads/2017/11/ky-tuc-xa.png",
    "desc": "Hàng loạt vụ tự sát liên tục xảy ra tại một trường đại học danh tiếng. Hiện trường của tất cả các vụ án đều không có gì bất thường, cảnh sát đành phải...",
    "players": "4-8",
    "difficulty": "Kinh Hoàng",
    "price": "169K - 299K/NG"
  },
  {
    "id": "hoa-nguc",
    "url": "https://masterescape.vn/services/hoa-nguc/",
    "brand": "master",
    "name": "HỎA NGỤC",
    "img": "https://masterescape.vn/wp-content/uploads/2017/11/hoa-nguc.jpg",
    "desc": "Đất nước Việt Nam ta đã trải qua hàng ngàn năm lịch sử với vô số cuộc chiến tranh lớn nhỏ, đặc biệt là hai cuộc chiến tranh chống thực dân Pháp và Đế...",
    "players": "4-10",
    "difficulty": "Kịch Tính",
    "price": "169K - 299K/NG"
  },
  {
    "id": "spiritescape-home",
    "url": "https://spiritescape.vn/",
    "brand": "spirit",
    "name": "Spirit Escape",
    "img": "https://spiritescape.vn/img/logo.png",
    "desc": "Trải nghiệm rùng rợn và kích thích tột độ tại Spirit Escape.",
    "players": "4-10",
    "difficulty": "Kinh Hoàng",
    "price": "Đang cập nhật"
  }
];

const brandNames = {
  inside: 'Inside XCape',
  master: 'Master Escape',
  spirit: 'Spirit Escape',
  genesis: 'Genesis Escape'
};

const brandFanpages = {
  inside: 'https://www.facebook.com/Insidexcaperoom/',
  master: 'https://www.facebook.com/masterescaperoom.vn/',
  spirit: 'https://www.facebook.com/spiritescape.vn/',
  genesis: 'https://www.facebook.com/genesisescape.hcm/'
};

const grid = document.getElementById('rooms-grid');
const navBtns = document.querySelectorAll('.nav-btn');
const modal = document.getElementById('room-modal');
const closeBtn = document.querySelector('.close-modal');
const exploreBtn = document.getElementById('explore-btn');

function renderRooms(filterBrand = 'all') {
  grid.innerHTML = '';
  const filtered = filterBrand === 'all' ? roomsData : roomsData.filter(r => r.brand === filterBrand);
  
  filtered.forEach(room => {
    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
      <div class="room-img" style="background-image: url('${room.img}')"></div>
      <div class="room-info">
        <div class="room-brand">${brandNames[room.brand]}</div>
        <h3 class="room-title">${room.name}</h3>
        <div class="room-meta">
          <span>👥 ${room.players}</span>
          <span>💀 ${room.difficulty}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(room));
    grid.appendChild(card);
  });
}

function openModal(room) {
  const modalBody = document.getElementById('modal-details');
  
  // Fake time slots for demonstration
  const timeSlots = [
    { time: '09:00', status: 'available' },
    { time: '10:30', status: 'booked' },
    { time: '12:00', status: 'available' },
    { time: '13:30', status: 'available' },
    { time: '15:00', status: 'booked' },
    { time: '16:30', status: 'available' },
    { time: '18:00', status: 'booked' },
    { time: '19:30', status: 'available' },
    { time: '21:00', status: 'available' },
    { time: '22:30', status: 'booked' }
  ];

  const slotsHtml = timeSlots.map(slot => `
    <div class="time-slot ${slot.status}">
      ${slot.time}
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div style="height: 300px; background-image: url('${room.img}'); background-size: cover; background-position: center; position: relative;">
      <div style="position:absolute; inset:0; background: linear-gradient(to top, var(--bg-color), transparent);"></div>
      <h2 class="glitch" data-text="${room.name}" style="position:absolute; bottom:20px; left:20px; font-size:3rem; margin:0;">${room.name}</h2>
    </div>
    <div style="padding: 2rem;">
      <p style="color: var(--blood-red); text-transform:uppercase; font-weight:bold; margin-bottom: 1rem;">${brandNames[room.brand]}</p>
      <p style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #ccc;">${room.desc}</p>
      
      <div class="room-stats-grid">
        <div class="stat-box">
          <i class="stat-icon">👥</i>
          <span class="stat-label">Số người</span>
          <span class="stat-value">${room.players}</span>
        </div>
        <div class="stat-box">
          <i class="stat-icon">💀</i>
          <span class="stat-label">Độ khó</span>
          <span class="stat-value">${room.difficulty}</span>
        </div>
        <div class="stat-box">
          <i class="stat-icon">💵</i>
          <span class="stat-label">Giá vé</span>
          <span class="stat-value" style="color: var(--blood-red)">${room.price}</span>
        </div>
      </div>
      
      <div class="booking-section">
        <div class="booking-header">
          <h3>LỊCH TRỐNG TRỰC TUYẾN TỪ WEBSITE GỐC</h3>
          <input type="date" class="date-picker-custom" value="2024-10-31">
        </div>
        <p style="font-size: 0.9rem; color: #888; margin-bottom: 1rem;">*Dữ liệu được lấy trực tiếp từ hệ thống của ${brandNames[room.brand]}.</p>
        
        <div class="slots-grid">
          ${slotsHtml}
        </div>
        
        <div class="booking-legends">
          <span class="legend"><div class="legend-color available"></div> Còn trống</span>
          <span class="legend"><div class="legend-color booked"></div> Đã kín</span>
        </div>

        <div class="booking-actions">
          <button class="btn-primary" onclick="window.open('${room.url}', '_blank')">Đặt Qua Website Gốc</button>
          <button class="btn-secondary" onclick="window.open('${brandFanpages[room.brand]}', '_blank')">Nhắn Tin Fanpage</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('show');
}

// Event Listeners
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRooms(btn.dataset.brand);
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

exploreBtn.addEventListener('click', () => {
  document.getElementById('rooms-grid').scrollIntoView({ behavior: 'smooth' });
});

// Init
renderRooms();
