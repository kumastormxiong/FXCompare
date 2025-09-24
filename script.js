// FXCompare - 外汇对比工具 JavaScript

class FXCompare {
    constructor() {
        this.currencies = [
            { code: 'USD', name: '美元', flag: '🇺🇸', rate: 1 },
            { code: 'EUR', name: '欧元', flag: '🇪🇺', rate: 0.85 },
            { code: 'GBP', name: '英镑', flag: '🇬🇧', rate: 0.73 },
            { code: 'JPY', name: '日元', flag: '🇯🇵', rate: 110 },
            { code: 'CNY', name: '人民币', flag: '🇨🇳', rate: 6.45 },
            { code: 'AUD', name: '澳元', flag: '🇦🇺', rate: 1.35 },
            { code: 'CAD', name: '加元', flag: '🇨🇦', rate: 1.25 },
            { code: 'CHF', name: '瑞士法郎', flag: '🇨🇭', rate: 0.92 },
            { code: 'HKD', name: '港币', flag: '🇭🇰', rate: 7.8 },
            { code: 'SGD', name: '新加坡元', flag: '🇸🇬', rate: 1.35 },
            { code: 'NZD', name: '新西兰元', flag: '🇳🇿', rate: 1.42 },
            { code: 'KRW', name: '韩元', flag: '🇰🇷', rate: 1180 },
            { code: 'INR', name: '印度卢比', flag: '🇮🇳', rate: 74 },
            { code: 'BRL', name: '巴西雷亚尔', flag: '🇧🇷', rate: 5.2 },
            { code: 'RUB', name: '俄罗斯卢布', flag: '🇷🇺', rate: 73 },
            { code: 'MXN', name: '墨西哥比索', flag: '🇲🇽', rate: 20 },
            { code: 'ZAR', name: '南非兰特', flag: '🇿🇦', rate: 14.5 },
            { code: 'TRY', name: '土耳其里拉', flag: '🇹🇷', rate: 8.5 },
            { code: 'SEK', name: '瑞典克朗', flag: '🇸🇪', rate: 8.7 },
            { code: 'NOK', name: '挪威克朗', flag: '🇳🇴', rate: 8.9 },
            { code: 'DKK', name: '丹麦克朗', flag: '🇩🇰', rate: 6.3 },
            { code: 'PLN', name: '波兰兹罗提', flag: '🇵🇱', rate: 3.9 },
            { code: 'CZK', name: '捷克克朗', flag: '🇨🇿', rate: 21.5 },
            { code: 'HUF', name: '匈牙利福林', flag: '🇭🇺', rate: 300 },
            { code: 'ILS', name: '以色列新谢克尔', flag: '🇮🇱', rate: 3.2 },
            { code: 'AED', name: '阿联酋迪拉姆', flag: '🇦🇪', rate: 3.67 },
            { code: 'SAR', name: '沙特里亚尔', flag: '🇸🇦', rate: 3.75 },
            { code: 'THB', name: '泰铢', flag: '🇹🇭', rate: 33 },
            { code: 'MYR', name: '马来西亚林吉特', flag: '🇲🇾', rate: 4.2 },
            { code: 'IDR', name: '印尼盾', flag: '🇮🇩', rate: 14300 }
        ];
        
        this.currencyInputs = [];
        this.targetCurrencyInputs = [];
        this.baseCurrency = 'USD';
        this.lastUpdate = null;
        this.pinnedCurrencies = []; // 存储顶置的货币
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.addInitialCurrencyInput();
        this.updateLastUpdateTime();
        this.simulateRealTimeRates();
        
        // 模拟初始加载
        setTimeout(() => {
            this.hideLoading();
        }, 1500);
    }
    
    setupEventListeners() {
        // 左侧同步选项事件监听
        document.getElementById('syncCountries').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.syncAllCountries();
            }
        });
        
        document.getElementById('syncAmounts').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.syncAllAmounts();
            }
        });
        
        // 右侧同步选项事件监听
        document.getElementById('syncTargetCountries').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.syncAllTargetCountries();
            }
        });
        
        document.getElementById('syncTargetAmounts').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.syncAllTargetAmounts();
            }
        });
    }
    
    addInitialCurrencyInput() {
        this.addCurrencyInput();
        // 不在这里添加目标货币，因为addCurrencyInput()会自动添加
    }
    
    addCurrencyInput() {
        const container = document.getElementById('currencyInputs');
        const inputId = `currency-${Date.now()}`;
        
        const currencyInput = {
            id: inputId,
            currency: 'USD',
            amount: 100
        };
        
        this.currencyInputs.push(currencyInput);
        
        const inputElement = this.createCurrencyInputElement(currencyInput);
        container.appendChild(inputElement);
        
        // 添加对应的目标货币输入
        this.addTargetCurrencyInput();
        
        this.updateResults();
    }
    
    addTargetCurrencyInput() {
        const container = document.getElementById('targetCurrencyInputs');
        const inputId = `target-currency-${Date.now()}`;
        
        const targetCurrencyInput = {
            id: inputId,
            currency: 'EUR',
            amount: 0 // 这个金额将由计算得出
        };
        
        this.targetCurrencyInputs.push(targetCurrencyInput);
        
        const inputElement = this.createTargetCurrencyInputElement(targetCurrencyInput);
        container.appendChild(inputElement);
        
        this.updateResults();
    }
    
    createCurrencyInputElement(currencyInput) {
        const div = document.createElement('div');
        div.className = 'currency-input-item';
        div.innerHTML = `
            <div class="currency-select">
                <select onchange="fxCompare.updateCurrency('${currencyInput.id}', this.value)">
                    ${this.currencies.map(currency => 
                        `<option value="${currency.code}" ${currency.code === currencyInput.currency ? 'selected' : ''}>
                            ${currency.flag} ${currency.code} - ${currency.name}
                        </option>`
                    ).join('')}
                </select>
            </div>
            <div class="amount-input">
                <input 
                    type="number" 
                    value="${currencyInput.amount}" 
                    placeholder="输入金额"
                    oninput="fxCompare.updateAmount('${currencyInput.id}', this.value)"
                    onchange="fxCompare.updateAmount('${currencyInput.id}', this.value)"
                >
                <button class="remove-currency" onclick="fxCompare.removeCurrencyInput('${currencyInput.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        return div;
    }
    
    createTargetCurrencyInputElement(targetCurrencyInput) {
        const div = document.createElement('div');
        div.className = 'target-currency-input-item';
        div.innerHTML = `
            <div class="currency-select">
                <select onchange="fxCompare.updateTargetCurrency('${targetCurrencyInput.id}', this.value)">
                    ${this.currencies.map(currency => 
                        `<option value="${currency.code}" ${currency.code === targetCurrencyInput.currency ? 'selected' : ''}>
                            ${currency.flag} ${currency.code} - ${currency.name}
                        </option>`
                    ).join('')}
                </select>
            </div>
            <div class="amount-input">
                <input 
                    type="text" 
                    value="0.00" 
                    placeholder="转换金额"
                    readonly
                >
                <button class="remove-currency" onclick="fxCompare.removeTargetCurrencyInput('${targetCurrencyInput.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        return div;
    }
    
    updateCurrency(inputId, currencyCode) {
        const input = this.currencyInputs.find(i => i.id === inputId);
        if (input) {
            input.currency = currencyCode;
            this.updateResults();
            
            // 如果启用了同步国家选项
            if (document.getElementById('syncCountries').checked) {
                this.syncAllCountries();
            }
        }
    }
    
    updateAmount(inputId, amount) {
        const input = this.currencyInputs.find(i => i.id === inputId);
        if (input) {
            input.amount = parseFloat(amount) || 0;
            this.updateResults();
            
            // 如果启用了同步金额选项
            if (document.getElementById('syncAmounts').checked) {
                this.syncAllAmounts();
            }
        }
    }
    
    removeCurrencyInput(inputId) {
        const inputIndex = this.currencyInputs.findIndex(i => i.id === inputId);
        this.currencyInputs = this.currencyInputs.filter(i => i.id !== inputId);
        
        const element = document.querySelector(`[onclick*="${inputId}"]`).closest('.currency-input-item');
        if (element) {
            element.remove();
        }
        
        // 删除对应的目标货币输入
        if (inputIndex >= 0 && inputIndex < this.targetCurrencyInputs.length) {
            const targetInput = this.targetCurrencyInputs[inputIndex];
            this.removeTargetCurrencyInput(targetInput.id);
        }
        
        this.updateResults();
    }
    
    updateTargetCurrency(inputId, currencyCode) {
        const input = this.targetCurrencyInputs.find(i => i.id === inputId);
        if (input) {
            input.currency = currencyCode;
            this.updateResults();
            
            // 如果启用了同步国家选项
            if (document.getElementById('syncTargetCountries').checked) {
                this.syncAllTargetCountries();
            }
        }
    }
    
    removeTargetCurrencyInput(inputId = null) {
        if (inputId) {
            // 删除指定的目标货币输入
            this.targetCurrencyInputs = this.targetCurrencyInputs.filter(i => i.id !== inputId);
            
            const element = document.querySelector(`[onclick*="${inputId}"]`).closest('.target-currency-input-item');
            if (element) {
                element.remove();
            }
        } else {
            // 删除最后一个目标货币输入（与左侧删除对应）
            if (this.targetCurrencyInputs.length > 0) {
                const lastInput = this.targetCurrencyInputs[this.targetCurrencyInputs.length - 1];
                this.removeTargetCurrencyInput(lastInput.id);
            }
        }
        
        this.updateResults();
    }
    
    syncAllCountries() {
        if (this.currencyInputs.length === 0) return;
        
        const firstCurrency = this.currencyInputs[0].currency;
        this.currencyInputs.forEach(input => {
            input.currency = firstCurrency;
        });
        
        // 更新所有选择框
        document.querySelectorAll('.currency-input-item select').forEach(select => {
            select.value = firstCurrency;
        });
        
        this.updateResults();
    }
    
    syncAllAmounts() {
        if (this.currencyInputs.length === 0) return;
        
        const firstAmount = this.currencyInputs[0].amount;
        this.currencyInputs.forEach(input => {
            input.amount = firstAmount;
        });
        
        // 更新所有输入框
        document.querySelectorAll('.currency-input-item input[type="number"]').forEach(input => {
            input.value = firstAmount;
        });
        
        this.updateResults();
    }
    
    syncAllTargetCountries() {
        if (this.targetCurrencyInputs.length === 0) return;
        
        const firstCurrency = this.targetCurrencyInputs[0].currency;
        this.targetCurrencyInputs.forEach(input => {
            input.currency = firstCurrency;
        });
        
        // 更新所有选择框
        document.querySelectorAll('.target-currency-input-item select').forEach(select => {
            select.value = firstCurrency;
        });
        
        this.updateResults();
    }
    
    syncAllTargetAmounts() {
        if (this.targetCurrencyInputs.length === 0) return;
        
        // 对于目标货币，我们不需要同步金额，因为金额是计算得出的
        // 这个函数保留是为了保持界面一致性
        this.updateResults();
    }
    
    updateResults() {
        this.updateTargetCurrencyAmounts();
        this.updateSummaryResults();
    }
    
    updateTargetCurrencyAmounts() {
        // 更新右侧目标货币的金额显示
        this.targetCurrencyInputs.forEach((targetInput, index) => {
            const sourceInput = this.currencyInputs[index];
            if (!sourceInput || sourceInput.amount === 0) {
                // 如果没有对应的源货币或金额为0，显示0
                this.updateTargetAmountDisplay(targetInput.id, 0);
                return;
            }
            
            const sourceCurrency = this.currencies.find(c => c.code === sourceInput.currency);
            const targetCurrency = this.currencies.find(c => c.code === targetInput.currency);
            
            if (sourceCurrency && targetCurrency) {
                // 计算转换金额
                const convertedAmount = (sourceInput.amount / sourceCurrency.rate) * targetCurrency.rate;
                this.updateTargetAmountDisplay(targetInput.id, convertedAmount);
            }
        });
    }
    
    updateTargetAmountDisplay(inputId, amount) {
        const inputElement = document.querySelector(`[onclick*="${inputId}"]`).closest('.target-currency-input-item');
        if (inputElement) {
            const amountInput = inputElement.querySelector('input[type="text"]');
            if (amountInput) {
                amountInput.value = this.formatAmount(amount);
            }
        }
    }
    
    updateSummaryResults() {
        const container = document.getElementById('summaryResultsContainer');
        
        if (this.currencyInputs.length === 0 || this.currencyInputs.every(input => input.amount === 0)) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exchange-alt"></i>
                    <p>请选择货币并输入金额以查看转换结果</p>
                </div>
            `;
            return;
        }
        
        const results = this.calculateResults();
        
        // 分离顶置和非顶置的货币
        const pinnedResults = results.filter(result => this.pinnedCurrencies.includes(result.code));
        const unpinnedResults = results.filter(result => !this.pinnedCurrencies.includes(result.code));
        
        // 合并结果，顶置的在前
        const sortedResults = [...pinnedResults, ...unpinnedResults];
        
        container.innerHTML = sortedResults.map(result => {
            const isPinned = this.pinnedCurrencies.includes(result.code);
            return `
                <div class="result-item ${isPinned ? 'pinned' : ''}" ondblclick="fxCompare.togglePin('${result.code}')">
                    <div class="result-currency">
                        <div class="currency-flag">${result.flag}</div>
                        <div>
                            <div class="currency-name">${result.name}</div>
                            <div class="currency-code">${result.code}</div>
                        </div>
                    </div>
                    <div class="result-amount">${result.amount}</div>
                    <div class="pin-button" onclick="fxCompare.togglePin('${result.code}')">
                        <i class="fas fa-thumbtack ${isPinned ? 'pinned' : ''}"></i>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    togglePin(currencyCode) {
        const index = this.pinnedCurrencies.indexOf(currencyCode);
        if (index > -1) {
            // 取消顶置
            this.pinnedCurrencies.splice(index, 1);
        } else {
            // 添加顶置
            this.pinnedCurrencies.push(currencyCode);
        }
        
        // 重新更新显示
        this.updateSummaryResults();
        
        // 显示提示
        const isPinned = this.pinnedCurrencies.includes(currencyCode);
        const message = isPinned ? `已顶置 ${currencyCode}` : `已取消顶置 ${currencyCode}`;
        this.showToast(message, 'success');
    }
    
    calculateResults() {
        const results = [];
        
        // 计算所有输入货币的总价值（以USD为基准）
        let totalUSDValue = 0;
        this.currencyInputs.forEach(input => {
            if (input.amount > 0) {
                const currency = this.currencies.find(c => c.code === input.currency);
                if (currency) {
                    totalUSDValue += input.amount / currency.rate;
                }
            }
        });
        
        // 转换为其他货币
        this.currencies.forEach(currency => {
            const amount = totalUSDValue * currency.rate;
            if (amount > 0) {
                results.push({
                    code: currency.code,
                    name: currency.name,
                    flag: currency.flag,
                    amount: this.formatAmount(amount)
                });
            }
        });
        
        return results;
    }
    
    formatAmount(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(2) + 'M';
        } else if (amount >= 1000) {
            return (amount / 1000).toFixed(2) + 'K';
        } else if (amount >= 1) {
            return amount.toFixed(2);
        } else {
            return amount.toFixed(4);
        }
    }
    
    updateLastUpdateTime() {
        const now = new Date();
        this.lastUpdate = now;
        
        // 格式化日期时间，包含年月日星期
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const weekday = weekdays[now.getDay()];
        const time = now.toLocaleTimeString('zh-CN', { hour12: false });
        
        const formattedTime = `${year}-${month}-${day} ${weekday} ${time}`;
        document.getElementById('lastUpdate').textContent = formattedTime;
    }
    
    simulateRealTimeRates() {
        // 模拟实时汇率更新
        setInterval(() => {
            this.currencies.forEach(currency => {
                if (currency.code !== 'USD') {
                    // 模拟汇率波动（±2%）
                    const change = (Math.random() - 0.5) * 0.04;
                    currency.rate = currency.rate * (1 + change);
                }
            });
            
            this.updateLastUpdateTime();
            this.updateResults();
        }, 30000); // 每30秒更新一次
    }
    
    showLoading() {
        document.getElementById('loadingOverlay').classList.add('active');
    }
    
    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }
    
    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-circle' : 'exclamation-triangle';
        
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${icon} toast-icon"></i>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        container.appendChild(toast);
        
        // 显示动画
        setTimeout(() => toast.classList.add('show'), 100);
        
        // 自动移除
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// 全局函数
function addCurrencyInput() {
    fxCompare.addCurrencyInput();
}

function addTargetCurrencyInput() {
    fxCompare.addTargetCurrencyInput();
}

function refreshRates() {
    fxCompare.showLoading();
    fxCompare.showToast('正在刷新汇率数据...', 'success');
    
    // 模拟API调用
    setTimeout(() => {
        fxCompare.currencies.forEach(currency => {
            if (currency.code !== 'USD') {
                // 模拟新的汇率数据
                const change = (Math.random() - 0.5) * 0.1;
                currency.rate = currency.rate * (1 + change);
            }
        });
        
        fxCompare.updateLastUpdateTime();
        fxCompare.updateResults();
        fxCompare.hideLoading();
        fxCompare.showToast('汇率数据已更新', 'success');
    }, 2000);
}

// 初始化应用
let fxCompare;
document.addEventListener('DOMContentLoaded', () => {
    fxCompare = new FXCompare();
});

// 响应式处理
window.addEventListener('resize', () => {
    // 处理响应式布局调整
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('应用错误:', e.error);
    if (fxCompare) {
        fxCompare.showToast('发生了一个错误，请刷新页面重试', 'error');
    }
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
        
        // 发送到Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'value': loadTime,
                'event_category': 'Performance'
            });
        }
    });
}
