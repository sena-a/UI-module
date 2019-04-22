const area = document.getElementById("input__area");
const initialText = area.value;
const areaForm = document.querySelector(".input__form");

// 글자수 제한 처리
function textCounter() {
  const counter = document.getElementById("input__count");
  if (area.value.length > -1 && area.value.length < 501) {
    counter.textContent = 500 - area.value.length;
  } else if (area.value.length > 500) {
    counter.textContent = 0;
    area.value = area.value.slice(0, 500);
  }
}

// 내용 변경 시 저장 버튼 노출
function saveButton() {
  const button = document.querySelector(".input__save");
  if (area.value !== initialText) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}

function input() {
  textCounter();
  saveButton();
}

textCounter();

area.addEventListener("keyup", () => {
  input();
});

areaForm.addEventListener("submit", e => {
  e.preventDefault();
  // 저장 버튼 클릭    시 발생하는 조건 처리
});
