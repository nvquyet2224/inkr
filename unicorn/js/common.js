function loadingImg() {
  const observer = lozad(".lozad", {
    rootMargin: "200px 0px",
    threshold: 0.1,
    enableAutoReload: true,
  });
  observer.observe();
  console.log("loadingImg");
}

loadingImg();

var currentPhone = "";
var currentPhone__LCD = "";

var timerOtp;
var countNumber = 60;
var otpCountValue;

var timerOtp__LCD;
var countNumber__LCD = 60;
var otpCountValue__LCD;

var nameMax = 12;
var heightMax = 200;
var weightMax = 60;

var phoneMin = 10;
var phoneMax = 12;
var otpMax = 6;

var userName = false,
  phone = false,
  otp = false,
  city = false,
  code = false,
  email = false,
  chkTnc = false;

var popCode = false;

var userName__LCD = false,
  phone__LCD = false,
  otp__LCD = false,
  chkTnc__LCD = false;

function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}

function openPopup(byThis) {
  $(".popup").removeClass("popup__open");
  $("body").addClass("noScroll");
  $(byThis).addClass("popup__open");
}

function closePopup() {
  $(".popup").removeClass("popup__open");
  $("body").removeClass("noScroll");
}

// Login
function countOtp() {
  timerOtp = setInterval(function () {
    var minSecond = otpCountValue < 10 ? "0" + otpCountValue : otpCountValue;
    document.querySelector(".time__count").innerHTML = minSecond;
    otpCountValue--;
    if (otpCountValue < 0) {
      clearInterval(timerOtp);
      $(".normal__txt").text("Gửi lại OTP");
      $("#txtPhone").attr("disabled", false);
      $(".request__otp").removeClass("isCount");
    }
  }, 1000);
}

function countOtp__LCD() {
  timerOtp__LCD = setInterval(function () {
    var minSecond =
      otpCountValue__LCD < 10 ? "0" + otpCountValue__LCD : otpCountValue__LCD;
    document.querySelector(".time__count--lcd").innerHTML = minSecond;
    otpCountValue__LCD--;
    if (otpCountValue__LCD < 0) {
      clearInterval(timerOtp__LCD);
      $(".normal__txt--lcd").text("Gửi lại OTP");
      $("#txtPhone--lcd").attr("disabled", false);
      $(".request__otp--lcd").removeClass("isCount");
    }
  }, 1000);
}

// Request OTP
$(document).on("click", ".request__otp", function () {
  if (!$(this).hasClass("isCount")) {
    document.querySelector(".time__count").innerHTML = countNumber;
    $("#txtPhone").attr("disabled", true);
    $(".request__otp").addClass("isCount");
    otpCountValue = countNumber;
    countOtp();

    // Send OTP to phone
    currentPhone = $("#txtPhone").val();
    sendOTP(currentPhone);
  }
});

// Request OTP LCD
$(document).on("click", ".request__otp--lcd", function () {
  if (!$(this).hasClass("isCount")) {
    document.querySelector(".time__count--lcd").innerHTML = countNumber__LCD;
    $("#txtPhone--lcd").attr("disabled", true);
    $(".request__otp--lcd").addClass("isCount");
    otpCountValue__LCD = countNumber__LCD;
    countOtp__LCD();

    // Send OTP to phone
    currentPhone__LCD = $("#txtPhone--lcd").val();
    sendOTP__LCD(currentPhone);
  }
});

function validEmpty(byThis) {
  var result = true;
  if ($(byThis).val() === "") {
    result = false;
  }
  return result;
}

function validNameSpcae(byThis) {
  var result = true;
  var rg = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;

  var value = $(byThis).val();
  if (value === "") {
    result = false;
  } else if (value !== "") {
    if (rg.test(change_alias(value))) {
      result = true;
    } else {
      result = false;
    }

    if (value.trim().length > nameMax) {
      result = false;
    }
  }
  return result;
}

function validName(byThis) {
  var result = true;

  var rg = /\d+/g;

  var value = $(byThis).val();
  if (value === "") {
    result = false;
  } else if (value !== "") {
    if (value.match(rg)) {
      result = false;
    }
    if (value.indexOf(" ") === 0) {
      result = false;
    }
  }
  return result;
}

function numberInput(byThis) {
  $(byThis).val(
    $(byThis)
      .val()
      .replace(/[^0-9]/g, "")
  );
}

function valiadPhone(byThis) {
  var regex = /^\d+$/;
  var result = true;
  var value = $(byThis).val();
  if (value === "") {
    result = false;
  } else if (value !== "") {
    if (
      /^\S*$/.test(value) &&
      value.replaceAll(/\s/g, "").match(regex)[0].length <= phoneMax
    ) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
}

function validOTP(byThis) {
  var regex = /^\d+$/;
  var result = true;
  var value = $(byThis).val();
  if (value === "") {
    result = false;
  } else if (value !== "") {
    if (
      /^\S*$/.test(value) &&
      value.replaceAll(/\s/g, "").match(regex)[0].length <= otpMax
    ) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
}

function validSelect(byThis) {
  var result = true;
  if ($(byThis).find(".select__item.selected").attr("data-value") === "none") {
    result = false;
  }
  return result;
}

function validEmail(byThis) {
  var email = $(byThis).val();
  if (email === "") {
    return true;
  } else {
    if (!/^\S*$/.test(email)) {
      return false;
    }
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// OTP Function
function sendOTP(phoneValue) {
  var url = "_fake-ajax.html";
  var settings = {
    url: url,
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  $.ajax(settings)
    .done(function (response) {
      // Send OTP Success
      //clearInterval(timerOtp);
      $(".phone__receive").html(phoneValue);
      $(".otp__message").removeClass("invalid");
      $(".otp__message").addClass("valid");
    })
    .fail(function (response) {
      // Send OTP Fail
      $(".otp__message").removeClass("valid");
      $(".otp__message").addClass("invalid");
    });
}

function sendOTP__LCD(phoneValue) {
  var url = "_fake-ajax.html";
  var settings = {
    url: url,
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  $.ajax(settings)
    .done(function (response) {
      // Send OTP Success
      //clearInterval(timerOtp);
      $(".phone__receive--lcd").html(phoneValue);
      $(".otp__message--lcd").removeClass("invalid");
      $(".otp__message--lcd").addClass("valid");
    })
    .fail(function (response) {
      // Send OTP Fail
      $(".otp__message--lcd").removeClass("valid");
      $(".otp__message--lcd").addClass("invalid");
    });
}

function infoShowError(byThis) {
  if ($(byThis).attr("id") === "txtName") {
    userName = validEmpty("#txtName");
    if (userName) {
      $("#txtName").parent().removeClass("show__error");
    } else {
      $("#txtName").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtPhone") {
    phone = valiadPhone("#txtPhone");
    if (phone) {
      $("#txtPhone").parent().removeClass("show__error");
    } else {
      $("#txtPhone").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtCode") {
    code = validEmpty("#txtCode");
    if (code) {
      $("#txtCode").parent().removeClass("show__error");
    } else {
      $("#txtCode").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtOtp") {
    otp = validOTP("#txtOtp");
    if (otp) {
      $("#txtOtp").parent().removeClass("show__error");
    } else {
      $("#txtOtp").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "selectCity") {
    city = validSelect("#selectCity");
    if (city) {
      $("#selectCity").parent().removeClass("show__error");
    } else {
      $("#selectCity").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtEmail") {
    email = validEmail("#txtEmail");
    if (email) {
      $("#txtEmail").parent().removeClass("show__error");
    } else {
      $("#txtEmail").parent().addClass("show__error");
    }
  }
}

function infoShowError__LCD(byThis) {
  if ($(byThis).attr("id") === "txtName--lcd") {
    userName__LCD = validEmpty("#txtName--lcd");
    if (userName__LCD) {
      $("#txtName--lcd").parent().removeClass("show__error");
    } else {
      $("#txtName--lcd").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtPhone--lcd") {
    phone__LCD = valiadPhone("#txtPhone--lcd");
    if (phone__LCD) {
      $("#txtPhone--lcd").parent().removeClass("show__error");
    } else {
      $("#txtPhone--lcd").parent().addClass("show__error");
    }
  }
  if ($(byThis).attr("id") === "txtOtp--lcd") {
    otp__LCD = validOTP("#txtOtp--lcd");
    if (otp__LCD) {
      $("#txtOtp--lcd").parent().removeClass("show__error");
    } else {
      $("#txtOtp--lcd").parent().addClass("show__error");
    }
  }
}

function infoValid() {
  userName = validEmpty("#txtName");
  phone = valiadPhone("#txtPhone");
  code = validEmpty("#txtCode");
  otp = validOTP("#txtOtp");
  city = validSelect("#selectCity");
  email = validEmail("#txtEmail");
  chkTnc = $("#chkCtn").is(":checked") ? true : false;

  if ($("#txtEmail").val() === "") {
    email = true;
  }

  // Handle OTP button by Phone valid .request__otp
  if (phone) {
    if ($("#txtPhone").val().trim().length >= phoneMin) {
      $(".request__otp, .request__otp").attr("disabled", false);
    } else {
      $(".request__otp, .request__otp").attr("disabled", true);
    }
  }
  

  if (userName && phone && code && otp && city && email && chkTnc) {
    if ($("#txtPhone").val().trim().length >= phoneMin) {
      $("#btnSubmit").attr("disabled", false);
    } else {
      $("#btnSubmit").attr("disabled", true);
    }
    if ($("#txtOtp").val().trim().length !== otpMax) {
      $("#btnSubmit").attr("disabled", true);
    } else {
      $("#btnSubmit").attr("disabled", false);
    }
  } else {
    $("#btnSubmit").attr("disabled", true);
  }
}

function infoValid__LCD() {
  userName__LCD = validEmpty("#txtName--lcd");
  phone__LCD = valiadPhone("#txtPhone--lcd");
  otp__LCD = validOTP("#txtOtp--lcd");
  chkTnc__LCD = $("#chkCtn--lcd").is(":checked") ? true : false;

  // Handle OTP button by Phone valid .request__otp
  if (phone__LCD) {
    if ($("#txtPhone--lcd").val().trim().length >= phoneMin) {
      $(".request__otp--lcd, .request__otp--lcd").attr("disabled", false);
    } else {
      $(".request__otp--lcd, .request__otp--lcd").attr("disabled", true);
    }
  }

  if (userName__LCD && phone__LCD && otp__LCD && chkTnc__LCD) {
    if ($("#txtPhone--lcd").val().trim().length >= phoneMin) {
      $("#btnSubmit--lcd").attr("disabled", false);
    } else {
      $("#btnSubmit--lcd").attr("disabled", true);
    }
    if ($("#txtOtp--lcd").val().trim().length !== otpMax) {
      $("#btnSubmit--lcd").attr("disabled", true);
    } else {
      $("#btnSubmit--lcd").attr("disabled", false);
    }
  } else {
    $("#btnSubmit--lcd").attr("disabled", true);
  }
}

function infoShowErrorPop(byThis) {
  if ($(byThis).attr("id") === "txtPopCode") {
    popCode = validEmpty("#txtPopCode");
    if (popCode) {
      $("#txtPopCode").parent().removeClass("show__error");
    } else {
      $("#txtPopCode").parent().addClass("show__error");
    }
  }
}

function infoValidPop() {
  popCode = validEmpty("#txtPopCode");

  if (popCode) {
    $("#btnPopCode").attr("disabled", false);
  } else {
    $("#btnPopCode").attr("disabled", true);
  }
}

// Input holder
function inputHolder() {
  $(".form__group .input__txt")
    .focus(function (e) {
      $(this).parent().removeClass("show__error");
    })
    .focusout(function (e) {
      infoShowError(this);
      infoValid();
    });

  $(".form__group .input__txt").on("input", function () {
    infoShowError(this);
    infoValid();
  });

  // Check Login valid
  $("#chkCtn").change(function () {
    if ($(this).attr("id") === "chkCtn") {
      chkTnc = $("#chkCtn").is(":checked") ? true : false;
      if (chkTnc) {
        $("#chkCtn").removeClass("chk__error");
      } else {
        $("#chkCtn").addClass("chk__error");
      }
    }
    infoValid();
  });

  $(".popup__message--error .input__txt")
    .focus(function (e) {
      $(this).parent().removeClass("show__error");
    })
    .focusout(function (e) {
      infoShowErrorPop(this);
      infoValidPop();
    });

  $(".popup__message--error .input__txt").on("input", function () {
    infoShowErrorPop(this);
    infoValidPop();
  });
}

// Input holder
function inputHolder__LCD() {
  $(".form__group--lcd .input__txt")
    .focus(function (e) {
      $(this).parent().removeClass("show__error");
    })
    .focusout(function (e) {
      infoShowError__LCD(this);
      infoValid__LCD();
    });

  $(".form__group--lcd .input__txt").on("input", function () {
    infoShowError__LCD(this);
    infoValid__LCD();
  });

  // Check Login valid
  $("#chkCtn--lcd").change(function () {
    if ($(this).attr("id") === "chkCtn--lcd") {
      chkTnc__LCD = $("#chkCtn--lcd").is(":checked") ? true : false;
      if (chkTnc__LCD) {
        $("#chkCtn--lcd").removeClass("chk__error");
      } else {
        $("#chkCtn--lcd").addClass("chk__error");
      }
    }
    infoValid__LCD();
  });
}

// Toggle Dropdown event
$(document).on("click", ".select__header", function () {
  var $box = $(this).parent();
  if ($(this).parent().hasClass("select__open")) {
    $(this).parent().removeClass("select__open");
    if ($box.find(".select__box li.selected").length === 0) {
      $box.addClass("show__error");
    }
  } else {
    $(".select").removeClass("select__open");
    $(this).parent().addClass("select__open");
  }
});

// Selected item Dropdown
$(document).on("click", ".select__box li", function () {
  if (!$(this).hasClass("selected")) {
    var $box = $(this).parent().parent().parent();
    var text = $(this).text();
    var value = $(this).attr("data-value");

    $box.find(".select__box li.selected").removeClass("selected");
    $(this).addClass("selected");
    $box.find(".select__input").html(text);
    $box.removeClass("select__open");

    if (value === "none") {
      $box.removeClass("selected");
    } else {
      $box.addClass("selected");
    }

    infoShowError($box);
    infoValid();
  }
});

function finishedSubmit() {
  // Fake ajax
  var dataForm = {
    name: $("#ntxtName").val(),
    phone: $("#txtPhone").val(),
    otp: $("#txtOtp").val(),
    code: $("#txtCode").val(),
    city: $("#selectCity .select__item.selected").attr("data-value"),
    chkCtn: chkTnc,
  };

  console.log(dataForm);

  var url = "_fake-ajax.html";
  var settings = {
    url: url,
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  $.ajax(settings)
    .done(function (response) {
      openPopup("#popup-success");
    })
    .fail(function (response) {
      openPopup("#popup-error");
    });
}

//Send data
$(document).on("click", "#btnSubmit", function () {
  // Show success or error
  //openPopup
  finishedSubmit();
});

$(document).on(
  "click",
  ".open__condition, #open-rules, #footer__open-rules",
  function () {
    openPopup("#popup__rules");
  }
);

$(document).on(
  "click",
  ".open__privacy, #open-privacy, #footer__open-privacy",
  function () {
    openPopup("#popup__privacy");
  }
);

// Open cookie
$(document).on("click", ".open__cookie", function () {
  openPopup("#popup__cookie");
});

$(document).on(
  "click",
  "#rules-close, #privacy-close, .popup__close",
  function () {
    closePopup();
  }
);

// TNC LCD
$(document).on("click", ".open__condition--cld", function () {
  openPopup("#popup__rules--lcd");
});

const getQR = () => {
  let url = window.location;
  let search = url.search;
  let qr = search ? search.split("&")[0].split("=")[1] : "";
  return qr;
};

const setQR = (id) => {
  if (getQR()) {
    $(id).val(getQR());
  }
};

function openLoading() {
  $(".loading__box").addClass("active");
}

function closeLoading() {
  $(".loading__box").removeClass("active");
}

//Close any Tooltip when click out
$(document).on("click touchstart", function (event) {
  if (
    $(".select").has(event.target).length == 0 &&
    !$(".select").is(event.target)
  ) {
    $(".select").removeClass("select__open");
  }
});

function disabledBtn(byThis) {
  $(byThis).attr("disabled", true);
}

function unDisabledBtn(byThis) {
  $(byThis).attr("disabled", false);
}

$(document).on("click", "#btnPopCode", function () {
  // Reset txtPopCode when click submit
  console.log($("#txtPopCode").val());
  $("#txtPopCode").val("");
});

// Card Game
var grapCardElm = $(".grab__card");
var welComeElm = $(".grab__welcome");
var userPhoneElm = $(".user__phone");
var overElm = $(".over__message");
var grapStepElm = $(".grap__step");
var grapResultElm = $(".grap__result");
var giftResultElm = $(".grab__gift--txt");
//var prizeElm = $('.win-prize');
var giftElm = $(".grab__gift");

// Card code ứng với 4 thẻ card
var cardIndex = {
  1: {
    core: 4,
  },
  2: {
    core: 4,
  },
  3: {
    core: 4,
  },
  4: {
    core: 1,
  },
};

var gameInfo = {
  newUser: false,
  userName: "Nguyễn Văn Quyết",
  userPhone: "0902572962",
  overVoucher: true,
  currentCard: 1,
  openedCard: [2, 3, 4],
  totalCard: 13,
  overGift: true,
};

var overVoucherMsg = "<p>Bạn ơi voucher hết mất rồi !</p>";
var overGiftMsg = "<p>Bạn ơi BALO MICKEY <br>đã hết mất rồi :(</p>";

function initRegister() {
  if (!gameInfo.newUser) {
    $("#txtName--lcd").val(gameInfo.userName);
    $("#txtName--lcd").attr("disabled", true);
  }
}

function cardForNewUser() {
  if (gameInfo.overVoucher) {
    overElm.html(
      `<p>Bạn đã săn được <br class="pc"><span class="color__red">${
        cardIndex[gameInfo.currentCard].core
      } thẻ <br class="sp">trong ${
        gameInfo.totalCard
      } thẻ của bộ sưu tập <br class="sp">SOLITE DISNEY</span></p>`
    );
    overElm.removeClass("hide");
    //edit
    grapResultElm.html(
      `<p>HÃY SĂN THÊM ${
        gameInfo.totalCard - cardIndex[gameInfo.currentCard].core
      } THẺ CÒN LẠI <br>để có cơ hội rinh ngay <br class="sp"><span class="color__red">BALO MICKEY</span> nhé!</p>`
    );
    grapResultElm.removeClass("hide");
    grapCardElm
      .find(".grab__card--img:nth-child(" + gameInfo.currentCard + ")")
      .addClass("active");
    //edit
    giftResultElm.html(
      `<p>Và còn <span class="color__red">nhiều chương trình hấp dẫn <br class="sp">với các quà tặng vô cùng giá trị.</span> <br>Hãy tham gia ngay!"</p>`
    );
    giftResultElm.removeClass("hide");
  } else {
    userPhoneElm.html(gameInfo.userPhone);
    welComeElm.removeClass("hide");
    grapStepElm.html(
      `<p>Bạn đã có được <span class="color__red">${
        cardIndex[gameInfo.currentCard].core
      } thẻ trong ${
        gameInfo.totalCard
      } thẻ của bộ sưu tập SOLITE DISNEY</span></p>`
    );
    grapStepElm.removeClass("hide");
    grapCardElm
      .find(".grab__card--img:nth-child(" + gameInfo.currentCard + ")")
      .addClass("active");

    grapResultElm.html(
      `<p>HÃY SĂN THÊM ${
        gameInfo.totalCard - cardIndex[gameInfo.currentCard].core
      } THẺ CÒN LẠI <br>để có cơ hội rinh ngay <br class="sp"><span class="color__red">BALO MICKEY</span> nhé!</p>`
    );
    grapResultElm.removeClass("hide");
    //more
    giftResultElm.html(
      `<p>Và còn <span class="color__red">nhiều chương trình hấp dẫn <br class="sp">với các quà tặng vô cùng giá trị.</span> <br>Hãy tham gia ngay!"</p>`
    );
    giftResultElm.removeClass("hide");
  }
}

function cardForOldUser() {
  var core = cardIndex[gameInfo.currentCard].core;
  grapCardElm
    .find(".grab__card--img:nth-child(" + gameInfo.currentCard + ")")
    .addClass("active");

  for (var i = 0; i < gameInfo.openedCard.length; i++) {
    core += cardIndex[gameInfo.openedCard[i]].core;
    grapCardElm
      .find(".grab__card--img:nth-child(" + gameInfo.openedCard[i] + ")")
      .addClass("active");
  }

  // Enabled all card
  if (core > 12) {
    for (var i = 1; i < 5; i++) {
      grapCardElm
        .find(".grab__card--img:nth-child(" + i + ")")
        .addClass("active");
    }
  }

  if (core < gameInfo.totalCard) {
    //grapStepElm.html(`<p>BẠN ĐÃ SĂN ĐƯỢC <span class="color__red">${core} THẺ <br>trong ${gameInfo.totalCard} thẻ của bộ sưu tập <br class="sp">SOLITE DISNEY</span></p>`);
    //grapStepElm.removeClass('hide');

    grapStepElm.html(
      `<p>Bạn đã săn được <br class="pc"><span class="color__red">${core} thẻ <br class="sp">trong ${gameInfo.totalCard} thẻ của bộ sưu tập <br class="sp">SOLITE DISNEY</span></p>`
    );
    grapStepElm.removeClass("hide");

    //Edit
    grapResultElm.html(
      `<p>HÃY SĂN THÊM ${
        gameInfo.totalCard - core
      } THẺ CÒN LẠI <br>để có cơ hội rinh ngay <br class="sp"><span class="color__red">BALO MICKEY</span> nhé!</p>`
    );
    grapResultElm.removeClass("hide");

    //more
    giftResultElm.html(
      `<p>Và còn <span class="color__red">nhiều chương trình hấp dẫn <br class="sp">với các quà tặng vô cùng giá trị.</span> <br>Hãy tham gia ngay!"</p>`
    );
    giftResultElm.removeClass("hide");
  } else {
    if (gameInfo.overGift) {
      // Edit
      overElm.html(
        `<p><span class="color__red">Bạn đã săn đủ ${gameInfo.totalCard} thẻ Solite nhưng <br>BALO MICKEY hết mất rồi :(</p>`
      );
      overElm.removeClass("hide");
      grapResultElm.html(
        `<p>Và còn <span class="color__red">nhiều chương trình hấp dẫn <br class="sp">với các quà tặng vô cùng giá trị.</span> <br>Hãy tham gia ngay!"`
      );
      grapResultElm.removeClass("hide");
      //prizeElm.removeClass('hide');
      giftElm.addClass("hide");
    } else {
      grapStepElm.html(
        `<p><span class="color__red">WOOHOO!!!</span> <br>Chúc mừng bạn đã <span class="color__red">đủ ${gameInfo.totalCard} thẻ trong bộ sưu tập SOLITE DISNEY</span> và nhận được <br class="pc">ngay quà tặng <span class="color__red">BALO MICKEY</span></p>`
      );
      grapStepElm.removeClass("hide");

      giftResultElm.html(
        `<p>Bạn hãy nhanh tay liên hệ với BTC qua <br><a class="color__blue" href="https://www.facebook.com/SoliteVietnam" target="_blank">fanpage Solite Vietnam</a> <br>để trao đổi thông tin nhận quà nhé!</p>`
      );
      giftResultElm.removeClass("hide");
    }
  }
}

function cardGameInit() {
  if (gameInfo.newUser) {
    cardForNewUser();
  } else {
    cardForOldUser();
  }
}

// Copy code
$(".but__copy").on("click", function () {
  var copyText = $(".but__code").text();
  copyText = copyText.replace(/\s+/g, " ").trim();
  copyText = copyText.split(" ").join("\n");
  var sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = copyText;
  sampleTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);
  $(".copy-status").addClass("active");
});

window.addEventListener("scroll", function () {
  onScroll();
});

function onScroll() {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  console.log(top);
  if (top > 150) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
}

function actionNav() {
  var page = $("body").attr("data-page");
  if (page) {
    //active
    $(".menu li[data-page=" + page + "]").addClass("active");
  }
  var pomotion = window.localStorage.getItem("promotion");
  if (pomotion) {
    setTimeout(function () {
      var top = $(`.${pomotion}`).offset().top;
      var headerH = $(".header").innerHeight();
      window.localStorage.clear();
      $("html, body").animate({ scrollTop: top - (headerH + 10) }, "slow");
    }, 500);
  }
}

(function () {
  inputHolder();
  setQR("#txtCode");
  setQR("#txtPopCode");
  infoValidPop();

  inputHolder__LCD();

  // Init game
  initRegister();
  cardGameInit();

  if ($(".section__content.lcd").length || $(".section__grab").length) {
    $("body").addClass("mobile__only");
  }
  if ($(".section__grab").length) {
    $(".logo-disney").remove();
  }

  setTimeout(function () {
    onScroll();
  }, 100);

  $(document).on("click", ".menu-but", function () {
    $(this).toggleClass("active");
  });

  $(document).on("click", ".goto-item", function () {
    if ($(".win-prize").length) {
      var goto = $(this).attr("data-goto");
      var top = $(`.${goto}`).offset().top;
      var headerH = $(".header").innerHeight();
      window.localStorage.clear();
      $("html, body").animate({ scrollTop: top - (headerH + 10) }, "slow");
    } else {
      var goto = $(this).attr("data-goto");
      window.localStorage.setItem("promotion", goto);
      window.location.href = "./";
    }
    
  });
  actionNav();
})();
