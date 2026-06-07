const themeConfig = {
  name: "International Digital Learning Portfolio",
  colors: {
    background: "#FFF7FB",
    surface: "#FFFFFF",
    primary: "#DB2777",
    secondary: "#2F2433",
    accent: "#FB7185",
    teal: "#A855F7",
  },
};

const profileItems = [
  {
    label: "PROFILE",
    title: "Thông tin học tập",
    text:
      "Mình hiện là sinh viên Trường Quốc tế, Đại học Quốc gia Hà Nội. Trong học phần Công nghệ số & ứng dụng trí tuệ nhân tạo, mình tập trung rèn luyện kỹ năng số, khả năng khai thác AI và phương pháp tổ chức sản phẩm học tập có hệ thống.",
  },
  {
    label: "OBJECTIVE",
    title: "Mục tiêu học phần",
    text:
      "Mục tiêu của học phần là rèn luyện năng lực sử dụng công cụ số, bao gồm quản lý tệp, tìm kiếm và đánh giá thông tin, viết prompt hiệu quả, hợp tác trực tuyến, sáng tạo nội dung bằng AI và sử dụng AI có trách nhiệm.",
  },
  {
    label: "PURPOSE",
    title: "Lý do xây dựng portfolio",
    text:
      "Portfolio giúp mình hệ thống hóa kết quả học tập, lưu trữ minh chứng thực hành và nhìn lại sự tiến bộ qua từng bài tập. Đây cũng là cách mình ghi lại việc công nghệ số hỗ trợ học tập, làm việc nhóm và xây dựng nội dung.",
  },
  {
    label: "SKILLS",
    title: "Kỹ năng muốn phát triển",
    text:
      "Mình hướng tới phát triển kỹ năng quản lý tài liệu, đánh giá nguồn thông tin, tư duy phản biện, viết prompt, phối hợp nhóm trực tuyến, thiết kế nội dung số và kiểm soát chất lượng đầu ra của AI.",
  },
  {
    label: "DIGITAL FOCUS",
    title: "Định hướng ứng dụng",
    text:
      "Định hướng học tập của mình gắn với chuyển đổi số, tài chính số, truyền thông số, chiến dịch nội dung, kinh doanh bền vững và ứng dụng AI để nâng cao hiệu quả học tập cũng như xử lý thông tin.",
  },
];

const cases = [
  {
    number: "01",
    type: "Digital Learning",
    color: "#DB2777",
    title: "Quản lý tệp và thư mục",
    pdf: "files/tuan1.pdf",
    featured: false,
    tags: ["Tệp tin", "Tổ chức dữ liệu", "Học tập số"],
    summary:
      "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu học tập theo cấu trúc rõ ràng.",
    details: {
      "Mục tiêu":
        "Rèn luyện kỹ năng thao tác cơ bản với tệp tin và thư mục, biết cách tạo thư mục, tạo tệp, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu trên máy tính.",
      "Tóm tắt quá trình":
        "Mình thực hành trên File Explorer, truy cập ổ đĩa hoặc thư mục Documents, tạo thư mục ThucHanh_LuuTuUyen, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục TaiLieu và thực hiện các thao tác quản lý tệp.",
      "Kết quả":
        "Hoàn thành chuỗi thao tác quản lý tệp cơ bản. Mình biết cách tổ chức dữ liệu học tập theo cấu trúc rõ ràng, thuận tiện cho lưu trữ, tìm kiếm và kiểm soát tài liệu.",
      "Bài học":
        "Quản lý tệp là kỹ năng nền tảng trong học tập số. Khi tài liệu được sắp xếp khoa học, người học giảm nguy cơ thất lạc file, tiết kiệm thời gian và làm việc hiệu quả hơn.",
      "Ứng dụng thực tế":
        "Kỹ năng quản lý tệp hỗ trợ lưu trữ báo cáo, dữ liệu học tập, nội dung truyền thông, file thiết kế và minh chứng bài tập theo hệ thống.",
    },
  },
  {
    number: "02",
    type: "Banking Transformation",
    color: "#F59E0B",
    title: "Chuyển đổi số và hiệu quả hoạt động ngân hàng thương mại",
    pdf: "files/tuan2.pdf",
    featured: true,
    tags: ["Digital banking", "Fintech", "Đánh giá nguồn"],
    summary:
      "Tìm kiếm và đánh giá tài liệu về tác động của chuyển đổi số đến hiệu quả hoạt động ngân hàng Việt Nam giai đoạn 2019-2025.",
    details: {
      "Mục tiêu":
        "Rèn luyện khả năng tìm kiếm, chọn lọc và đánh giá thông tin học thuật về tác động của chuyển đổi số đến hiệu quả hoạt động của các ngân hàng thương mại Việt Nam.",
      "Tóm tắt quá trình":
        "Mình lựa chọn chủ đề tác động của chuyển đổi số đến hiệu quả hoạt động của ngân hàng thương mại giai đoạn 2019-2025, tìm kiếm qua Google Scholar, Microsoft Academic, cơ sở dữ liệu học thuật và nguồn mở uy tín như PwC, Deloitte, IMF, World Bank, Statista.",
      "Kết quả":
        "Mình xây dựng được danh mục tài liệu liên quan đến digital banking, fintech, hiệu quả hoạt động ngân hàng, tài chính số và chuyển đổi số trong ngành ngân hàng.",
      "Bài học":
        "Thông tin tài chính - ngân hàng cần được kiểm chứng từ cả nguồn học thuật và báo cáo tổ chức uy tín. Việc đánh giá nguồn giúp tránh kết luận thiếu cơ sở khi phân tích xu hướng chuyển đổi số.",
      "Ứng dụng thực tế":
        "Bài tập giúp mình hiểu vai trò của chuyển đổi số trong tối ưu vận hành, cải thiện trải nghiệm khách hàng, phát triển fintech và nâng cao năng lực cạnh tranh trong môi trường số.",
    },
  },
  {
    number: "03",
    type: "Prompt",
    color: "#A855F7",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    pdf: "files/tuan3.pdf",
    featured: false,
    tags: ["Prompt", "AI", "Tóm tắt", "Ôn tập"],
    summary:
      "So sánh prompt cơ bản, cải tiến và nâng cao trong các tác vụ tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập.",
    details: {
      "Mục tiêu":
        "Phát triển kỹ năng viết prompt để khai thác hiệu quả mô hình ngôn ngữ lớn trong học tập, gồm tóm tắt tài liệu, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập.",
      "Tóm tắt quá trình":
        "Mình thử nghiệm ba tác vụ học tập: tóm tắt bài đọc học thuật, giải thích khái niệm Học sâu và tạo bộ câu hỏi ôn tập về trí tuệ nhân tạo. Mỗi tác vụ được xây dựng theo ba mức prompt.",
      "Kết quả":
        "Prompt nâng cao cho kết quả tốt hơn nhờ role prompting, cấu trúc rõ ràng, tiêu chí đầu ra cụ thể và định hướng đúng đối tượng học.",
      "Bài học":
        "Prompt không chỉ là câu hỏi mà là cách thiết kế yêu cầu cho AI. Khi xác định rõ vai trò, phạm vi, định dạng và tiêu chí đánh giá, AI tạo phản hồi phù hợp hơn.",
      "Ứng dụng thực tế":
        "Kỹ năng prompt hỗ trợ tóm tắt báo cáo, phân tích xu hướng, tạo ý tưởng nội dung, xây dựng câu hỏi khảo sát, mô phỏng chân dung người dùng và hỗ trợ ra quyết định học thuật.",
    },
  },
  {
    number: "04",
    type: "Collaboration",
    color: "#C026D3",
    title: "Hợp tác trực tuyến trong dự án truyền thông phòng ngừa tăng huyết áp",
    pdf: "files/tuan4.pdf",
    featured: false,
    tags: ["Trello", "Google Docs", "Drive", "Nhóm"],
    summary:
      "Quản lý nhiệm vụ, đóng góp nội dung, lưu trữ minh chứng và phối hợp nhóm trong một dự án truyền thông.",
    details: {
      "Mục tiêu":
        "Rèn luyện kỹ năng sử dụng công cụ hợp tác trực tuyến để quản lý nhiệm vụ, soạn thảo tài liệu, lưu trữ dữ liệu và giao tiếp nhóm trong một dự án học tập.",
      "Tóm tắt quá trình":
        "Mình tham gia dự án nhóm xây dựng tài liệu truyền thông về phòng ngừa tăng huyết áp ở người trẻ. Các công cụ gồm Trello, Google Docs, Google Drive và Zalo hoặc Microsoft Teams.",
      "Kết quả":
        "Mình biết cách quản lý danh sách nhiệm vụ, phân loại trạng thái công việc, đóng góp trên tài liệu chung, lưu trữ tài liệu theo thư mục và phối hợp với thành viên khác.",
      "Bài học":
        "Hợp tác trực tuyến hiệu quả cần quy trình rõ ràng, phân công cụ thể, cập nhật đúng hạn và lưu trữ có hệ thống. Công cụ số chỉ hiệu quả khi nhóm thống nhất cách sử dụng.",
      "Ứng dụng thực tế":
        "Trong học tập và môi trường làm việc số, kỹ năng hợp tác trực tuyến hỗ trợ quản lý nhiệm vụ, chia sẻ dữ liệu, kiểm soát tiến độ và phối hợp nhóm hiệu quả hơn.",
    },
  },
  {
    number: "05",
    type: "Digital Sustainability Campaign",
    color: "#FB7185",
    title: "Sáng tạo nội dung AI - “Sống xanh là sống sành”",
    pdf: "files/tuan5.pdf",
    featured: true,
    tags: ["Content", "AI tạo sinh", "Bền vững"],
    summary:
      "Ứng dụng AI để phát triển concept, slogan, hình ảnh và thông điệp cho chiến dịch nội dung số về lối sống xanh.",
    details: {
      "Mục tiêu":
        "Thực hành sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số, từ ý tưởng, slogan, hình ảnh đến thiết kế poster hoặc video ngắn.",
      "Tóm tắt quá trình":
        "Mình lựa chọn dự án “Sống xanh là sống sành”, sử dụng Google Gemini và ChatGPT để phát triển concept truyền thông, slogan và danh sách hành động bảo vệ môi trường dành cho sinh viên. Công cụ tạo hình ảnh và Canva AI hỗ trợ visual, dàn trang và hoàn thiện sản phẩm.",
      "Kết quả":
        "Mình xây dựng được các concept như “Mảnh ghép di sản” và “Pin Cuộc Sống”, so sánh ưu điểm của từng hướng thiết kế, lựa chọn màu sắc, thông điệp và hình ảnh phù hợp.",
      "Bài học":
        "AI hỗ trợ nhanh trong giai đoạn lên ý tưởng, tạo bản thảo và thiết kế ban đầu, nhưng sản phẩm cuối cùng vẫn cần con người chọn lọc, chỉnh sửa và kiểm soát thông điệp.",
      "Ứng dụng thực tế":
        "Bài tập có thể áp dụng vào content marketing, truyền thông bền vững, xây dựng chiến dịch số và thiết kế thông điệp thương hiệu.",
    },
  },
  {
    number: "06",
    type: "Responsible AI",
    color: "#7C3AED",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    pdf: "files/tuan6.pdf",
    featured: true,
    tags: ["Liêm chính", "Kiểm chứng", "AI học thuật"],
    summary:
      "Tìm hiểu nguyên tắc minh bạch, kiểm chứng, tránh đạo văn và giữ tính trung thực học thuật khi sử dụng AI.",
    details: {
      "Mục tiêu":
        "Hiểu và thực hành nguyên tắc sử dụng AI có trách nhiệm trong học tập và nghiên cứu, bao gồm minh bạch, kiểm chứng, tránh đạo văn và bảo vệ tính trung thực học thuật.",
      "Tóm tắt quá trình":
        "Mình nghiên cứu khung hướng dẫn sử dụng AI trong môi trường học thuật, xem AI như trợ lý học tập thay vì công cụ làm thay, sau đó thực hành nhiệm vụ viết đề cương bài luận với sự hỗ trợ của AI và tự đánh giá, chỉnh sửa đầu ra.",
      "Kết quả":
        "Mình hiểu rõ các nguyên tắc như không sao chép nguyên văn nội dung AI, kiểm chứng thông tin, khai báo khi sử dụng AI, chịu trách nhiệm cuối cùng với sản phẩm học thuật và không dùng AI để gian lận.",
      "Bài học":
        "AI có thể hỗ trợ học tập hiệu quả nhưng không thay thế tư duy cá nhân. Người học cần kiểm soát chất lượng đầu ra, bổ sung nguồn đáng tin cậy và giữ tính trung thực.",
      "Ứng dụng thực tế":
        "Trong học tập và công việc số, AI hỗ trợ phân tích dữ liệu, tạo nội dung, nghiên cứu thị trường và tối ưu quy trình, nhưng cần được dùng có trách nhiệm.",
    },
  },
];

const outcomes = [
  {
    title: "Đã học được",
    text:
      "Qua 6 bài tập, mình học được cách quản lý tài liệu số, tìm kiếm và đánh giá thông tin học thuật, viết prompt hiệu quả, hợp tác trực tuyến, sáng tạo nội dung bằng AI và sử dụng AI có trách nhiệm.",
  },
  {
    title: "Kỹ năng cải thiện",
    text:
      "Các kỹ năng được cải thiện gồm tổ chức dữ liệu, đánh giá nguồn tin, tư duy phản biện, viết prompt, quản lý công việc nhóm, xây dựng nội dung số và kiểm soát chất lượng đầu ra của AI.",
  },
  {
    title: "Khó khăn",
    text:
      "Khó khăn chính là chọn lọc nguồn đáng tin cậy, xử lý nhiều tài liệu, viết prompt đủ cụ thể, điều chỉnh nội dung AI tạo ra và bảo đảm sản phẩm phù hợp với yêu cầu học thuật.",
  },
  {
    title: "Cách khắc phục",
    text:
      "Mình khắc phục bằng cách chia nhỏ nhiệm vụ, đối chiếu nhiều nguồn, tự biên tập nội dung, dùng AI như công cụ hỗ trợ và kiểm tra lại sản phẩm trước khi hoàn thiện.",
  },
  {
    title: "Định hướng tương lai",
    text:
      "Các kỹ năng này có thể tiếp tục áp dụng vào học tập tại Trường Quốc tế, nghiên cứu thị trường, phân tích dữ liệu, xây dựng nội dung truyền thông, làm việc nhóm và sử dụng AI hỗ trợ ra quyết định.",
  },
  {
    title: "Liên hệ công nghệ số & AI",
    text:
      "Portfolio cho thấy công cụ số và AI có thể hỗ trợ mạnh cho quá trình học tập nếu được sử dụng có kiểm soát, kết hợp tư duy số, khả năng kiểm chứng thông tin, kỹ năng cộng tác và trách nhiệm học thuật.",
  },
];

function renderIndex() {
  document.getElementById("index-list").innerHTML = cases
    .map(
      (item) => `
        <a class="index-item" href="#case-${item.number}">
          <b>${item.number}</b>
          <span>${item.title}</span>
        </a>
      `,
    )
    .join("");
}

function renderProfile() {
  document.getElementById("profile-grid").innerHTML = profileItems
    .map(
      (item) => `
        <article class="profile-card">
          <span class="profile-label">${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderCases() {
  const target = document.getElementById("case-grid");
  target.innerHTML = cases
    .map(
      (item) => `
        <article class="case-card ${item.featured ? "is-featured" : ""}" id="case-${item.number}" style="--case-color: ${item.color}">
          <span class="case-number">Case ${item.number}</span>
          <span class="case-type">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="case-actions">
            <button class="button" type="button" data-case="${item.number}">Xem chi tiết</button>
            <a class="button button-primary" href="${item.pdf}" target="_blank" rel="noopener">Mở PDF</a>
          </div>
        </article>
      `,
    )
    .join("");

  target.querySelectorAll("[data-case]").forEach((button) => {
    button.addEventListener("click", () => openCase(button.dataset.case));
  });
}

function renderOutcomes() {
  document.getElementById("outcomes-grid").innerHTML = outcomes
    .map(
      (item, index) => `
        <article class="outcome-card">
          <span class="outcome-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function openCase(number) {
  const item = cases.find((caseItem) => caseItem.number === number);
  const dialog = document.getElementById("case-dialog");
  if (!item) return;

  dialog.style.setProperty("--case-color", item.color);
  document.getElementById("dialog-label").textContent = `Case ${item.number} / ${item.type}`;
  document.getElementById("dialog-title").textContent = item.title;
  document.getElementById("dialog-pdf").href = item.pdf;
  document.getElementById("dialog-tags").innerHTML = [item.type, ...item.tags]
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  document.getElementById("case-notes").innerHTML = Object.entries(item.details)
    .map(
      ([title, text]) => `
        <section class="case-note">
          <h3>${title}</h3>
          <p>${text}</p>
        </section>
      `,
    )
    .join("");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(item.pdf, "_blank", "noopener");
  }
}

function setupDialog() {
  const dialog = document.getElementById("case-dialog");
  const close = dialog.querySelector(".dialog-close");
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setupNavState() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

renderIndex();
renderProfile();
renderCases();
renderOutcomes();
setupDialog();
setupNavState();

window.portfolioTheme = themeConfig;
