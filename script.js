const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const TRACKS = [
  ["all", "All"],
  ["strength", "Strength"],
  ["conditioning", "Conditioning"],
  ["boxing", "Boxing"],
  ["ride", "Ride"],
  ["mobility", "Mobility"],
];
const HOURS = {
  0: [7 * 60, 20 * 60],
  1: [5 * 60, 23 * 60],
  2: [5 * 60, 23 * 60],
  3: [5 * 60, 23 * 60],
  4: [5 * 60, 23 * 60],
  5: [5 * 60, 23 * 60],
  6: [7 * 60, 20 * 60],
};

const CLASSES = [
  c(1, "06:00", "Strength Foundations", "Maya Chen", "Studio A", 50, "All levels", "strength", 0, 12),
  c(1, "07:00", "Engine", "Jordan Hale", "Studio B", 40, "Intermediate", "conditioning", 6, 16),
  c(1, "09:30", "Mobility", "Amira Sol", "Studio C", 45, "All levels", "mobility", 8, 14),
  c(1, "12:10", "Midday Strength", "Maya Chen", "The floor", 40, "All levels", "strength", 4, 10),
  c(1, "17:30", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 2, 14),
  c(1, "18:30", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 7, 20),
  c(1, "19:30", "Strength", "Maya Chen", "Studio A", 55, "Intermediate", "strength", 3, 12),
  c(2, "06:00", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 9, 20),
  c(2, "07:00", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 5, 14),
  c(2, "09:30", "Strength Foundations", "Maya Chen", "Studio A", 50, "All levels", "strength", 6, 12),
  c(2, "12:10", "Conditioning", "Jordan Hale", "Studio B", 35, "All levels", "conditioning", 8, 16),
  c(2, "17:30", "Mobility", "Amira Sol", "Studio C", 45, "All levels", "mobility", 4, 14),
  c(2, "18:30", "Strength", "Maya Chen", "The floor", 55, "Intermediate", "strength", 1, 12),
  c(2, "19:45", "Engine", "Jordan Hale", "Studio B", 40, "Intermediate", "conditioning", 10, 16),
  c(3, "06:00", "Strength Foundations", "Maya Chen", "Studio A", 50, "All levels", "strength", 2, 12),
  c(3, "07:00", "Conditioning", "Jordan Hale", "Studio B", 40, "All levels", "conditioning", 7, 16),
  c(3, "09:30", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 6, 14),
  c(3, "12:10", "Mobility", "Amira Sol", "Studio C", 40, "All levels", "mobility", 9, 14),
  c(3, "17:30", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 4, 20),
  c(3, "18:30", "Strength", "Maya Chen", "Studio A", 55, "Intermediate", "strength", 0, 12),
  c(3, "19:30", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 5, 14),
  c(4, "06:00", "Engine", "Jordan Hale", "Studio B", 40, "Intermediate", "conditioning", 3, 16),
  c(4, "07:00", "Strength Foundations", "Maya Chen", "Studio A", 50, "All levels", "strength", 5, 12),
  c(4, "09:30", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 11, 20),
  c(4, "12:10", "Boxing Technique", "Leo Park", "Studio B", 45, "All levels", "boxing", 6, 14),
  c(4, "17:30", "Mobility", "Amira Sol", "Studio C", 45, "All levels", "mobility", 7, 14),
  c(4, "18:30", "Conditioning", "Jordan Hale", "Studio B", 40, "All levels", "conditioning", 2, 16),
  c(4, "19:30", "Strength", "Maya Chen", "The floor", 55, "Intermediate", "strength", 4, 12),
  c(5, "06:00", "Strength Foundations", "Maya Chen", "Studio A", 50, "All levels", "strength", 1, 12),
  c(5, "07:00", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 8, 20),
  c(5, "09:30", "Mobility", "Amira Sol", "Studio C", 45, "All levels", "mobility", 6, 14),
  c(5, "12:10", "Conditioning", "Jordan Hale", "Studio B", 30, "All levels", "conditioning", 9, 16),
  c(5, "17:00", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 3, 14),
  c(5, "18:00", "Strength", "Maya Chen", "The floor", 50, "All levels", "strength", 5, 12),
  c(6, "08:00", "Strength Foundations", "Maya Chen", "Studio A", 55, "All levels", "strength", 2, 12),
  c(6, "09:15", "Conditioning", "Jordan Hale", "Studio B", 40, "All levels", "conditioning", 6, 16),
  c(6, "10:15", "Boxing Technique", "Leo Park", "Studio B", 50, "All levels", "boxing", 4, 14),
  c(6, "11:15", "Mobility", "Amira Sol", "Studio C", 50, "All levels", "mobility", 8, 14),
  c(6, "12:15", "Ride", "Jordan Hale", "Ride room", 45, "All levels", "ride", 10, 20),
  c(0, "08:30", "Long Strength", "Maya Chen", "The floor", 70, "Intermediate", "strength", 5, 12),
  c(0, "09:30", "Mobility & Breath", "Amira Sol", "Studio C", 50, "All levels", "mobility", 7, 14),
  c(0, "10:45", "Easy Ride", "Jordan Hale", "Ride room", 40, "All levels", "ride", 12, 20),
  c(0, "11:45", "Boxing Skills", "Leo Park", "Studio B", 45, "All levels", "boxing", 6, 14),
];

function c(day, time, name, coach, room, mins, level, track, spots, cap) {
  const id = `${day}-${time}-${track}`;
  return { id, day, time, name, coach, room, mins, level, track, spots, cap };
}

const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

function fmtTime(t) {
  const [h, m] = t.split(":").map(Number);
  const ap = h >= 12 ? "pm" : "am";
  const hr = h % 12 || 12;
  return `${hr}:${String(m).padStart(2, "0")}${ap}`;
}

function fmtMins(m) {
  const h = Math.floor(m / 60);
  const ap = h >= 12 ? "pm" : "am";
  const hr = h % 12 || 12;
  const min = m % 60;
  return min ? `${hr}:${String(min).padStart(2, "0")}${ap}` : `${hr}${ap}`;
}

function hoursStatus(date = new Date()) {
  const day = date.getDay();
  const mins = date.getHours() * 60 + date.getMinutes();
  const [open, close] = HOURS[day];
  if (mins >= open && mins < close) return { on: true, text: `Open now · until ${fmtMins(close)}` };
  if (mins < open) return { on: false, text: `Closed · opens ${fmtMins(open)}` };
  const next = HOURS[(day + 1) % 7][0];
  return { on: false, text: `Closed · opens ${fmtMins(next)}` };
}

function rowHTML(item) {
  const full = item.spots <= 0;
  const low = item.spots > 0 && item.spots <= 3;
  const spotLabel = full ? "Full · waitlist" : `${item.spots} spot${item.spots === 1 ? "" : "s"} left`;
  const btn = full ? "Join the waitlist" : "Hold a spot";
  const here = location.pathname.endsWith("classes.html");
  const href = here ? `#${item.track}` : `classes.html#${item.track}`;
  return `<article class="class-row">
    <div class="class-time">${fmtTime(item.time)}</div>
    <div class="class-main">
      <div class="class-name">${esc(item.name)}</div>
      <div class="class-meta"><span class="track t-${item.track}"></span><a href="${href}">${esc(TRACKS.find((t) => t[0] === item.track)[1])}</a> · ${esc(item.coach)} · ${esc(item.room)} · ${item.mins} min · ${esc(item.level)}</div>
    </div>
    <div class="spots${low ? " spots-low" : ""}">${spotLabel}</div>
    <button type="button" class="btn ${full ? "btn-ghost" : "btn-light"} btn-sm" data-hold="${esc(item.id)}">${btn}</button>
  </article>`;
}

function mountSchedules() {
  document.querySelectorAll("[data-schedule]").forEach((root) => {
    const preview = root.dataset.schedule === "preview";
    const state = { day: new Date().getDay(), track: "all" };

    const draw = () => {
      const list = CLASSES.filter((item) => item.day === state.day && (state.track === "all" || item.track === state.track));
      const shown = preview ? list.slice(0, 5) : list;
      const label = document.querySelector("[data-today-label]");
      if (preview && label) {
        const when = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
        label.textContent = `${when} · ${list.length} ${list.length === 1 ? "class" : "classes"}`;
      }
      const controls = preview ? "" : `
        <div class="schedule-top">
          <div class="days" role="group" aria-label="Day">
            ${[1, 2, 3, 4, 5, 6, 0].map((d) => `<button type="button" class="day" data-day="${d}" aria-pressed="${d === state.day}">${DAYS[d].slice(0, 3)}</button>`).join("")}
          </div>
        </div>
        <div class="filters" role="group" aria-label="Class type">
          ${TRACKS.map(([id, name]) => `<button type="button" class="chip" data-track="${id}" aria-pressed="${id === state.track}">${name}</button>`).join("")}
        </div>`;
      const rows = shown.length ? shown.map(rowHTML).join("") : `<p class="empty">Nothing on the board for that filter. Try another day or all class types.</p>`;
      const more = preview && list.length > shown.length ? `<p class="more-link"><a class="link-arrow" href="classes.html#schedule">${list.length - shown.length} more today</a></p>` : "";
      root.innerHTML = controls + rows + more;
    };

    root.addEventListener("click", (e) => {
      const dayBtn = e.target.closest("[data-day]");
      const trackBtn = e.target.closest("[data-track]");
      if (dayBtn) { state.day = +dayBtn.dataset.day; draw(); }
      if (trackBtn) { state.track = trackBtn.dataset.track; draw(); }
    });
    draw();
  });
}

function mountHours() {
  const status = hoursStatus();
  document.querySelectorAll("[data-hours]").forEach((el) => { el.textContent = status.text; });
  document.querySelectorAll("[data-pulse]").forEach((el) => el.classList.toggle("off", !status.on));
}

function mountNav() {
  const nav = document.querySelector(".nav");
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 12);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
  if (!btn || !links) return;
  const setOpen = (open) => {
    links.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };
  btn.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

function mountBilling() {
  const group = document.querySelector("[data-billing]");
  if (!group) return;
  const apply = (mode) => {
    group.querySelectorAll("[data-bill]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.bill === mode)));
    document.querySelectorAll(".js-price").forEach((el) => { el.textContent = `$${el.dataset[mode]}`; });
    document.querySelectorAll(".js-note").forEach((el) => { el.textContent = el.dataset[mode]; });
  };
  group.addEventListener("click", (e) => {
    const b = e.target.closest("[data-bill]");
    if (b) apply(b.dataset.bill);
  });
}

function mountForms() {
  document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const success = form.parentElement.querySelector(".form-success");
      form.hidden = true;
      if (success) success.hidden = false;
    });
  });

  const params = new URLSearchParams(location.search);
  const plan = params.get("plan");
  const select = document.querySelector("#plan");
  if (select && plan && [...select.options].some((o) => o.value === plan)) select.value = plan;
}

function mountDialog() {
  const dialog = document.querySelector("#spot-dialog");
  if (!dialog) return;
  const form = dialog.querySelector("form");
  const success = dialog.querySelector(".form-success");
  const title = dialog.querySelector("h3");
  const meta = dialog.querySelector(".sheet-meta");

  const open = (id) => {
    const item = CLASSES.find((x) => x.id === id);
    if (!item) return;
    form.hidden = false;
    success.hidden = true;
    form.reset();
    const waiting = item.spots <= 0;
    title.textContent = waiting ? "Join the waitlist" : "Hold a spot";
    meta.textContent = `${item.name} · ${DAYS[item.day]} · ${fmtTime(item.time)} · ${item.coach}`;
    form.dataset.wait = waiting ? "1" : "0";
    form.dataset.label = `${item.name} on ${DAYS[item.day]} at ${fmtTime(item.time)}`;
    dialog.showModal();
  };

  document.addEventListener("click", (e) => {
    const hold = e.target.closest("[data-hold]");
    if (hold) open(hold.dataset.hold);
    if (e.target === dialog) dialog.close();
  });
  dialog.querySelector(".sheet-close").addEventListener("click", () => dialog.close());
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const waiting = form.dataset.wait === "1";
    success.querySelector("strong").textContent = waiting ? "You're on the list." : "Your spot is held.";
    success.querySelector("p").textContent = waiting
      ? `We'll text you if a place opens for ${form.dataset.label}.`
      : `We'll see you for ${form.dataset.label}. A reminder goes out the evening before.`;
    form.hidden = true;
    success.hidden = false;
  });
}

mountNav();
mountHours();
mountSchedules();
mountBilling();
mountForms();
mountDialog();
