// 監理服務網 JavaScript 功能

// 等待頁面載入完成
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// 初始化頁面功能
function initializePage() {
    // 初始化表單驗證
    setupFormValidation();
    
    // 初始化日期選擇器
    setupDatePicker();
    
    // 初始化驗證碼
    refreshCaptcha();
    
    // 設定輸入框事件
    setupInputEvents();
}

// 設定表單驗證
function setupFormValidation() {
    const form = document.getElementById('form1');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitForm();
        });
    }
}

// 表單提交處理
function submitForm() {
    // 清除之前的錯誤訊息
    clearErrorMessages();
    
    // 驗證表單
    if (validateForm()) {
        // 顯示處理中訊息
        showProcessingMessage();
        
        // 模擬處理時間
        setTimeout(function() {
            hideProcessingMessage();
            // 這裡可以添加實際的表單提交邏輯
            alert('查詢功能僅供展示，實際系統請使用官方網站');
        }, 2000);
    }
}

// 表單驗證
function validateForm() {
    let isValid = true;
    
    // 驗證身分證字號
    const uid = document.getElementById('uid').value.trim().toUpperCase();
    if (!uid) {
        showError('uid_error', '請輸入身分證字號或居留證');
        isValid = false;
    } else if (!validateID(uid)) {
        showError('uid_error', '身分證或居留證格式錯誤');
        isValid = false;
    }
    
    // 驗證出生日期
    const birthdayRoc = document.getElementById('birthday_roc').value.trim();
    if (!birthdayRoc) {
        showError('birthday_error', '請選擇出生日期');
        isValid = false;
    } else if (!validateBirthday(birthdayRoc)) {
        showError('birthday_error', '生日格式錯誤');
        isValid = false;
    }
    
    // 驗證驗證碼
    const captcha = document.getElementById('captcha').value.trim();
    if (!captcha) {
        showError('captcha_error', '請輸入驗證碼');
        isValid = false;
    } else if (captcha.length !== 4) {
        showError('captcha_error', '驗證碼長度錯誤');
        isValid = false;
    }
    
    return isValid;
}

// 身分證字號驗證
function validateID(id) {
    // 台灣身分證字號驗證邏輯
    if (id.length !== 10) return false;
    
    // 第一個字母必須是A-Z
    if (!/^[A-Z]/.test(id)) return false;
    
    // 第二個字元必須是1或2
    if (!/^[A-Z][12]/.test(id)) return false;
    
    // 後面8位必須是數字
    if (!/^[A-Z][12]\d{8}$/.test(id)) return false;
    
    // 簡化的檢查碼驗證（實際系統會更複雜）
    return true;
}

// 出生日期驗證
function validateBirthday(birthday) {
    // 驗證格式：YYYMMDD (民國年)
    if (!/^\d{7}$/.test(birthday)) return false;
    
    const year = parseInt(birthday.substring(0, 3));
    const month = parseInt(birthday.substring(3, 5));
    const day = parseInt(birthday.substring(5, 7));
    
    // 基本範圍檢查
    if (year < 1 || year > 200) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    
    return true;
}

// 顯示錯誤訊息
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// 清除錯誤訊息
function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error_msg');
    errorElements.forEach(function(element) {
        element.textContent = '';
        element.style.display = 'none';
    });
}

// 設定輸入框事件
function setupInputEvents() {
    // 身分證字號自動轉大寫
    const uidInput = document.getElementById('uid');
    if (uidInput) {
        uidInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
        
        uidInput.addEventListener('blur', function() {
            if (this.value) {
                validateSingleField('uid', validateID(this.value), '身分證或居留證格式錯誤');
            }
        });
    }
    
    // 民國年出生日期格式檢查
    const birthdayRocInput = document.getElementById('birthday_roc');
    if (birthdayRocInput) {
        birthdayRocInput.addEventListener('blur', function() {
            if (this.value) {
                validateSingleField('birthday', validateBirthday(this.value), '生日格式錯誤');
            }
        });
    }
    
    // 驗證碼自動轉大寫
    const captchaInput = document.getElementById('captcha');
    if (captchaInput) {
        captchaInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
            
            // 限制長度
            if (this.value.length > 4) {
                this.value = this.value.substring(0, 4);
            }
        });
    }
}

// 單一欄位驗證
function validateSingleField(fieldName, isValid, errorMessage) {
    const errorElementId = fieldName + '_error';
    if (isValid) {
        clearFieldError(errorElementId);
    } else {
        showError(errorElementId, errorMessage);
    }
}

// 清除單一欄位錯誤
function clearFieldError(errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// 日期選擇器功能
function setupDatePicker() {
    const birthdayInput = document.getElementById('birthday');
    const birthdayRocInput = document.getElementById('birthday_roc');
    
    if (birthdayInput && birthdayRocInput) {
        // 當西元日期變更時，自動轉換為民國年格式
        birthdayInput.addEventListener('change', function() {
            if (this.value) {
                const selectedDate = new Date(this.value);
                const rocYear = selectedDate.getFullYear() - 1911;
                const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
                const day = selectedDate.getDate().toString().padStart(2, '0');
                
                if (rocYear > 0) {
                    birthdayRocInput.value = rocYear.toString().padStart(3, '0') + month + day;
                } else {
                    birthdayRocInput.value = '';
                    alert('請選擇民國元年（西元1912年）以後的日期');
                    this.value = '';
                }
            } else {
                birthdayRocInput.value = '';
            }
        });
        
        // 設定日期輸入的範圍（民國元年到現在）
        const minDate = '1912-01-01';
        const maxDate = new Date().toISOString().split('T')[0];
        birthdayInput.setAttribute('min', minDate);
        birthdayInput.setAttribute('max', maxDate);
    }
}

// 刷新驗證碼
function refreshCaptcha() {
    const captchaCanvas = document.getElementById('captcha_img');
    if (captchaCanvas) {
        generateCaptcha(captchaCanvas);
        
        // 清空驗證碼輸入框
        const captchaInput = document.getElementById('captcha');
        if (captchaInput) {
            captchaInput.value = '';
        }
        
        // 清除驗證碼錯誤訊息
        clearFieldError('captcha_error');
    }
}

// 生成驗證碼圖片
function generateCaptcha(canvas) {
    const ctx = canvas.getContext('2d');
    const captchaText = generateRandomString(4);
    
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 設定背景
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 添加干擾線
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgb(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 100})`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }
    
    // 繪製驗證碼文字
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < captchaText.length; i++) {
        const char = captchaText[i];
        const x = (canvas.width / captchaText.length) * (i + 0.5);
        const y = canvas.height / 2 + (Math.random() - 0.5) * 6;
        const angle = (Math.random() - 0.5) * 0.3;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`;
        ctx.fillText(char, 0, 0);
        ctx.restore();
    }
    
    // 儲存當前驗證碼（實際系統會存在伺服器端）
    window.currentCaptcha = captchaText;
}

// 顯示處理中訊息
function showProcessingMessage() {
    // 創建遮罩層
    const overlay = document.createElement('div');
    overlay.id = 'processing_overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    // 創建訊息框
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        background: #333;
        color: #ffdd00;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 18px;
        text-align: center;
    `;
    messageBox.textContent = '查詢中，請稍後...';
    
    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);
}

// 隱藏處理中訊息
function hideProcessingMessage() {
    const overlay = document.getElementById('processing_overlay');
    if (overlay) {
        overlay.remove();
    }
}

// 工具函數：生成隨機字串（用於模擬驗證碼）
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 模擬驗證碼驗證（實際系統會與伺服器驗證）
function validateCaptcha(input) {
    // 這裡只是簡單的長度檢查，實際系統會與伺服器端的驗證碼比對
    return input && input.length === 4;
}

// 防止表單重複提交
let isSubmitting = false;

function preventDoubleSubmit() {
    if (isSubmitting) {
        return false;
    }
    isSubmitting = true;
    
    // 3秒後重置提交狀態
    setTimeout(function() {
        isSubmitting = false;
    }, 3000);
    
    return true;
}