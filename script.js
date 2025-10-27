// FXCompare - 外汇对比工具 JavaScript

class FXCompare {
    constructor() {
        // 货币信息配置（不包含汇率，汇率从API获取）
        this.currencyConfig = [
            { 
                code: 'USD', 
                name: '美元', 
                nameEn: 'US Dollar', 
                nameFr: 'Dollar américain',
                nameEs: 'Dólar estadounidense',
                nameJa: '米ドル',
                nameDe: 'US-Dollar',
                nameKo: '미국 달러',
                nameRu: 'Доллар США',
                flag: '🇺🇸' 
            },
            { 
                code: 'EUR', 
                name: '欧元', 
                nameEn: 'Euro', 
                nameFr: 'Euro',
                nameEs: 'Euro',
                nameJa: 'ユーロ',
                nameDe: 'Euro',
                nameKo: '유로',
                nameRu: 'Евро',
                flag: '🇪🇺' 
            },
            { 
                code: 'GBP', 
                name: '英镑', 
                nameEn: 'British Pound', 
                nameFr: 'Livre sterling',
                nameEs: 'Libra esterlina',
                nameJa: '英ポンド',
                nameDe: 'Britisches Pfund',
                nameKo: '영국 파운드',
                nameRu: 'Британский фунт',
                flag: '🇬🇧' 
            },
            { 
                code: 'JPY', 
                name: '日元', 
                nameEn: 'Japanese Yen', 
                nameFr: 'Yen japonais',
                nameEs: 'Yen japonés',
                nameJa: '日本円',
                nameDe: 'Japanischer Yen',
                nameKo: '일본 엔',
                nameRu: 'Японская иена',
                flag: '🇯🇵' 
            },
            { 
                code: 'CNY', 
                name: '人民币', 
                nameEn: 'Chinese Yuan', 
                nameFr: 'Yuan chinois',
                nameEs: 'Yuan chino',
                nameJa: '中国元',
                nameDe: 'Chinesischer Yuan',
                nameKo: '중국 위안',
                nameRu: 'Китайский юань',
                flag: '🇨🇳' 
            },
            { 
                code: 'AUD', 
                name: '澳元', 
                nameEn: 'Australian Dollar', 
                nameFr: 'Dollar australien',
                nameEs: 'Dólar australiano',
                nameJa: '豪ドル',
                nameDe: 'Australischer Dollar',
                nameKo: '호주 달러',
                nameRu: 'Австралийский доллар',
                flag: '🇦🇺' 
            },
            { 
                code: 'CAD', 
                name: '加元', 
                nameEn: 'Canadian Dollar', 
                nameFr: 'Dollar canadien',
                nameEs: 'Dólar canadiense',
                nameJa: 'カナダドル',
                nameDe: 'Kanadischer Dollar',
                nameKo: '캐나다 달러',
                nameRu: 'Канадский доллар',
                flag: '🇨🇦' 
            },
            { 
                code: 'CHF', 
                name: '瑞士法郎', 
                nameEn: 'Swiss Franc', 
                nameFr: 'Franc suisse',
                nameEs: 'Franco suizo',
                nameJa: 'スイスフラン',
                nameDe: 'Schweizer Franken',
                nameKo: '스위스 프랑',
                nameRu: 'Швейцарский франк',
                flag: '🇨🇭' 
            },
            { 
                code: 'HKD', 
                name: '港币', 
                nameEn: 'Hong Kong Dollar', 
                nameFr: 'Dollar de Hong Kong',
                nameEs: 'Dólar de Hong Kong',
                nameJa: '香港ドル',
                nameDe: 'Hongkong-Dollar',
                nameKo: '홍콩 달러',
                nameRu: 'Гонконгский доллар',
                flag: '🇭🇰' 
            },
            { 
                code: 'SGD', 
                name: '新加坡元', 
                nameEn: 'Singapore Dollar', 
                nameFr: 'Dollar de Singapour',
                nameEs: 'Dólar de Singapur',
                nameJa: 'シンガポールドル',
                nameDe: 'Singapur-Dollar',
                nameKo: '싱가포르 달러',
                nameRu: 'Сингапурский доллар',
                flag: '🇸🇬' 
            },
            { 
                code: 'NZD', 
                name: '新西兰元', 
                nameEn: 'New Zealand Dollar', 
                nameFr: 'Dollar néo-zélandais',
                nameEs: 'Dólar neozelandés',
                nameJa: 'ニュージーランドドル',
                nameDe: 'Neuseeland-Dollar',
                nameKo: '뉴질랜드 달러',
                nameRu: 'Новозеландский доллар',
                flag: '🇳🇿' 
            },
            { 
                code: 'KRW', 
                name: '韩元', 
                nameEn: 'South Korean Won', 
                nameFr: 'Won sud-coréen',
                nameEs: 'Won surcoreano',
                nameJa: '韓国ウォン',
                nameDe: 'Südkoreanischer Won',
                nameKo: '대한민국 원',
                nameRu: 'Южнокорейская вона',
                flag: '🇰🇷' 
            },
            { 
                code: 'INR', 
                name: '印度卢比', 
                nameEn: 'Indian Rupee', 
                nameFr: 'Roupie indienne',
                nameEs: 'Rupia india',
                nameJa: 'インドルピー',
                nameDe: 'Indische Rupie',
                nameKo: '인도 루피',
                nameRu: 'Индийская рупия',
                flag: '🇮🇳' 
            },
            { 
                code: 'BRL', 
                name: '巴西雷亚尔', 
                nameEn: 'Brazilian Real', 
                nameFr: 'Real brésilien',
                nameEs: 'Real brasileño',
                nameJa: 'ブラジルレアル',
                nameDe: 'Brasilianischer Real',
                nameKo: '브라질 헤알',
                nameRu: 'Бразильский реал',
                flag: '🇧🇷' 
            },
            { 
                code: 'RUB', 
                name: '俄罗斯卢布', 
                nameEn: 'Russian Ruble', 
                nameFr: 'Rouble russe',
                nameEs: 'Rublo ruso',
                nameJa: 'ロシアルーブル',
                nameDe: 'Russischer Rubel',
                nameKo: '러시아 루블',
                nameRu: 'Российский рубль',
                flag: '🇷🇺' 
            },
            { 
                code: 'MXN', 
                name: '墨西哥比索', 
                nameEn: 'Mexican Peso', 
                nameFr: 'Peso mexicain',
                nameEs: 'Peso mexicano',
                nameJa: 'メキシコペソ',
                nameDe: 'Mexikanischer Peso',
                nameKo: '멕시코 페소',
                nameRu: 'Мексиканское песо',
                flag: '🇲🇽' 
            },
            { 
                code: 'ZAR', 
                name: '南非兰特', 
                nameEn: 'South African Rand', 
                nameFr: 'Rand sud-africain',
                nameEs: 'Rand sudafricano',
                nameJa: '南アフリカランド',
                nameDe: 'Südafrikanischer Rand',
                nameKo: '남아프리카 랜드',
                nameRu: 'Южноафриканский рэнд',
                flag: '🇿🇦' 
            },
            { 
                code: 'TRY', 
                name: '土耳其里拉', 
                nameEn: 'Turkish Lira', 
                nameFr: 'Livre turque',
                nameEs: 'Lira turca',
                nameJa: 'トルコリラ',
                nameDe: 'Türkische Lira',
                nameKo: '터키 리라',
                nameRu: 'Турецкая лира',
                flag: '🇹🇷' 
            },
            { 
                code: 'SEK', 
                name: '瑞典克朗', 
                nameEn: 'Swedish Krona', 
                nameFr: 'Couronne suédoise',
                nameEs: 'Corona sueca',
                nameJa: 'スウェーデンクローナ',
                nameDe: 'Schwedische Krone',
                nameKo: '스웨덴 크로나',
                nameRu: 'Шведская крона',
                flag: '🇸🇪' 
            },
            { 
                code: 'NOK', 
                name: '挪威克朗', 
                nameEn: 'Norwegian Krone', 
                nameFr: 'Couronne norvégienne',
                nameEs: 'Corona noruega',
                nameJa: 'ノルウェークローネ',
                nameDe: 'Norwegische Krone',
                nameKo: '노르웨이 크로네',
                nameRu: 'Норвежская крона',
                flag: '🇳🇴' 
            },
            { 
                code: 'DKK', 
                name: '丹麦克朗', 
                nameEn: 'Danish Krone', 
                nameFr: 'Couronne danoise',
                nameEs: 'Corona danesa',
                nameJa: 'デンマーククローネ',
                nameDe: 'Dänische Krone',
                nameKo: '덴마크 크로네',
                nameRu: 'Датская крона',
                flag: '🇩🇰' 
            },
            { 
                code: 'PLN', 
                name: '波兰兹罗提', 
                nameEn: 'Polish Zloty', 
                nameFr: 'Zloty polonais',
                nameEs: 'Zloty polaco',
                nameJa: 'ポーランドズロチ',
                nameDe: 'Polnischer Zloty',
                nameKo: '폴란드 즈워티',
                nameRu: 'Польский злотый',
                flag: '🇵🇱' 
            },
            { 
                code: 'CZK', 
                name: '捷克克朗', 
                nameEn: 'Czech Koruna', 
                nameFr: 'Couronne tchèque',
                nameEs: 'Corona checa',
                nameJa: 'チェココルナ',
                nameDe: 'Tschechische Krone',
                nameKo: '체코 코루나',
                nameRu: 'Чешская крона',
                flag: '🇨🇿' 
            },
            { 
                code: 'HUF', 
                name: '匈牙利福林', 
                nameEn: 'Hungarian Forint', 
                nameFr: 'Forint hongrois',
                nameEs: 'Forint húngaro',
                nameJa: 'ハンガリーフォリント',
                nameDe: 'Ungarischer Forint',
                nameKo: '헝가리 포린트',
                nameRu: 'Венгерский форинт',
                flag: '🇭🇺' 
            },
            { 
                code: 'ILS', 
                name: '以色列新谢克尔', 
                nameEn: 'Israeli Shekel', 
                nameFr: 'Shekel israélien',
                nameEs: 'Shekel israelí',
                nameJa: 'イスラエルシェケル',
                nameDe: 'Israelischer Schekel',
                nameKo: '이스라엘 셰켈',
                nameRu: 'Израильский шекель',
                flag: '🇮🇱' 
            },
            { 
                code: 'AED', 
                name: '阿联酋迪拉姆', 
                nameEn: 'UAE Dirham', 
                nameFr: 'Dirham des Émirats',
                nameEs: 'Dirham de los Emiratos',
                nameJa: 'UAEディルハム',
                nameDe: 'VAE-Dirham',
                nameKo: 'UAE 디르함',
                nameRu: 'Дирхам ОАЭ',
                flag: '🇦🇪' 
            },
            { 
                code: 'SAR', 
                name: '沙特里亚尔', 
                nameEn: 'Saudi Riyal', 
                nameFr: 'Riyal saoudien',
                nameEs: 'Riyal saudí',
                nameJa: 'サウジアラビアリヤル',
                nameDe: 'Saudi-Riyal',
                nameKo: '사우디 리얄',
                nameRu: 'Саудовский риал',
                flag: '🇸🇦' 
            },
            { 
                code: 'THB', 
                name: '泰铢', 
                nameEn: 'Thai Baht', 
                nameFr: 'Baht thaïlandais',
                nameEs: 'Baht tailandés',
                nameJa: 'タイバーツ',
                nameDe: 'Thailändischer Baht',
                nameKo: '태국 바트',
                nameRu: 'Тайский бат',
                flag: '🇹🇭' 
            },
            { 
                code: 'MYR', 
                name: '马来西亚林吉特', 
                nameEn: 'Malaysian Ringgit', 
                nameFr: 'Ringgit malaisien',
                nameEs: 'Ringgit malayo',
                nameJa: 'マレーシアリンギット',
                nameDe: 'Malaysischer Ringgit',
                nameKo: '말레이시아 링깃',
                nameRu: 'Малайзийский ринггит',
                flag: '🇲🇾' 
            },
            { 
                code: 'IDR', 
                name: '印尼盾', 
                nameEn: 'Indonesian Rupiah', 
                nameFr: 'Roupie indonésienne',
                nameEs: 'Rupia indonesia',
                nameJa: 'インドネシアルピア',
                nameDe: 'Indonesische Rupiah',
                nameKo: '인도네시아 루피아',
                nameRu: 'Индонезийская рупия',
                flag: '🇮🇩' 
            }
        ];
        
        this.currencies = []; // 将从API获取的汇率数据
        this.currencyInputs = [];
        this.targetCurrencyInputs = [];
        this.baseCurrency = 'USD';
        this.lastUpdate = null;
        this.pinnedCurrencies = [];
        this.apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        
        // 先加载备用数据，确保界面正常显示
        this.loadFallbackRates();
        this.addInitialCurrencyInput();
        this.updateLastUpdateTime();
        
        // 然后尝试加载真实API数据
        this.loadExchangeRates();
        
        // 设置定时更新汇率
        this.setupRateUpdates();
    }
    
    async loadExchangeRates() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoading();
        
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            // API数据已接收
            
            // 检查API响应格式
            if (data.rates && typeof data.rates === 'object') {
                this.updateCurrenciesFromAPI(data.rates);
                this.updateLastUpdateTime();
                this.updateResults();
                this.showAPIStatus('success', '');
            } else {
                throw new Error('API响应格式不正确');
            }
            
        } catch (error) {
            console.error('获取汇率数据失败:', error);
            this.loadFallbackRates();
            this.showAPIStatus('error', '');
        } finally {
            this.isLoading = false;
            this.hideLoading();
        }
    }
    
    updateCurrenciesFromAPI(rates) {
        this.currencies = this.currencyConfig.map(config => {
            const rate = rates[config.code] || 1;
            return {
                code: config.code,
                name: config.name,
                nameEn: config.nameEn,
                nameFr: config.nameFr,
                nameEs: config.nameEs,
                nameJa: config.nameJa,
                nameDe: config.nameDe,
                nameKo: config.nameKo,
                nameRu: config.nameRu,
                flag: config.flag,
                rate: rate
            };
        });
        
        // 重新渲染所有货币选择器
        this.refreshAllCurrencySelectors();
    }
    
    getCurrencyName(currency, lang) {
        const nameMap = {
            'zh': currency.name,
            'en': currency.nameEn,
            'fr': currency.nameFr,
            'es': currency.nameEs,
            'ja': currency.nameJa,
            'de': currency.nameDe,
            'ko': currency.nameKo,
            'ru': currency.nameRu
        };
        return nameMap[lang] || currency.nameEn || currency.name;
    }
    
    refreshAllCurrencySelectors() {
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        
        // 重新渲染左侧货币选择器
        this.currencyInputs.forEach(input => {
            const element = document.querySelector(`[onclick*="${input.id}"]`).closest('.currency-input-item');
            if (element) {
                const select = element.querySelector('select');
                if (select) {
                    const currentValue = select.value;
                    select.innerHTML = this.currencies.map(currency => {
                        const displayName = this.getCurrencyName(currency, currentLang);
                        return `<option value="${currency.code}">
                            ${currency.flag} ${currency.code} - ${displayName}
                        </option>`;
                    }).join('');
                    select.value = currentValue;
                }
            }
        });
        
        // 重新渲染右侧目标货币选择器
        this.targetCurrencyInputs.forEach(input => {
            const element = document.querySelector(`[onclick*="${input.id}"]`).closest('.target-currency-input-item');
            if (element) {
                const select = element.querySelector('select');
                if (select) {
                    const currentValue = select.value;
                    select.innerHTML = this.currencies.map(currency => {
                        const displayName = this.getCurrencyName(currency, currentLang);
                        return `<option value="${currency.code}">
                            ${currency.flag} ${currency.code} - ${displayName}
                        </option>`;
                    }).join('');
                    select.value = currentValue;
                }
            }
        });
    }
    
    loadFallbackRates() {
        // 备用汇率数据（当API失败时使用，基于您提供的API数据格式）
        const fallbackRates = {
            'USD': 1, 'EUR': 0.847, 'GBP': 0.74, 'JPY': 147.69, 'CNY': 7.11,
            'AUD': 1.52, 'CAD': 1.38, 'CHF': 0.792, 'HKD': 7.78, 'SGD': 1.28,
            'NZD': 1.71, 'KRW': 1393.87, 'INR': 88.81, 'BRL': 5.34, 'RUB': 83.67,
            'MXN': 18.34, 'ZAR': 17.26, 'TRY': 41.43, 'SEK': 9.33, 'NOK': 9.89,
            'DKK': 6.32, 'PLN': 3.61, 'CZK': 20.54, 'HUF': 329.97, 'ILS': 3.34,
            'AED': 3.67, 'SAR': 3.75, 'THB': 31.87, 'MYR': 4.2, 'IDR': 16668.28
        };
        
        this.currencies = this.currencyConfig.map(config => ({
            code: config.code,
            name: config.name,
            nameEn: config.nameEn,
            nameFr: config.nameFr,
            nameEs: config.nameEs,
            nameJa: config.nameJa,
            nameDe: config.nameDe,
            nameKo: config.nameKo,
            nameRu: config.nameRu,
            flag: config.flag,
            rate: fallbackRates[config.code] || 1
        }));
    }
    
    setupRateUpdates() {
        // 每5分钟更新一次汇率
        setInterval(() => {
            this.loadExchangeRates();
        }, 5 * 60 * 1000);
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
        
        // 确保currencies数组有数据，如果没有则使用currencyConfig
        const currencyList = this.currencies.length > 0 ? this.currencies : this.currencyConfig;
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        const i18n = getI18nTexts(currentLang);
        const placeholderText = currentLang === 'zh' ? '输入金额' : (i18n.enterAmount || 'Enter amount');
        
        div.innerHTML = `
            <div class="currency-select">
                <select onchange="fxCompare.updateCurrency('${currencyInput.id}', this.value)">
                    ${currencyList.map(currency => {
                        const displayName = this.getCurrencyName(currency, currentLang);
                        return `<option value="${currency.code}" ${currency.code === currencyInput.currency ? 'selected' : ''}>
                            ${currency.flag} ${currency.code} - ${displayName}
                        </option>`;
                    }).join('')}
                </select>
            </div>
            <div class="amount-input">
                <input 
                    type="number" 
                    value="${currencyInput.amount}" 
                    placeholder="${placeholderText}"
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
        
        // 确保currencies数组有数据，如果没有则使用currencyConfig
        const currencyList = this.currencies.length > 0 ? this.currencies : this.currencyConfig;
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        const i18n = getI18nTexts(currentLang);
        const placeholderText = currentLang === 'zh' ? '转换金额' : (i18n.convertedAmount || 'Converted Amount');
        
        div.innerHTML = `
            <div class="currency-select">
                <select onchange="fxCompare.updateTargetCurrency('${targetCurrencyInput.id}', this.value)">
                    ${currencyList.map(currency => {
                        const displayName = this.getCurrencyName(currency, currentLang);
                        return `<option value="${currency.code}" ${currency.code === targetCurrencyInput.currency ? 'selected' : ''}>
                            ${currency.flag} ${currency.code} - ${displayName}
                        </option>`;
                    }).join('')}
                </select>
            </div>
            <div class="amount-input">
                <input 
                    type="text" 
                    value="0.00" 
                    placeholder="${placeholderText}"
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
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        
        if (this.currencyInputs.length === 0 || this.currencyInputs.every(input => input.amount === 0)) {
            const i18n = getI18nTexts(currentLang);
            const noResultsText = currentLang === 'zh' ? '请选择货币并输入金额以查看转换结果' : (i18n.noResults || 'Please select currencies and enter amounts to view conversion results');
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exchange-alt"></i>
                    <p>${noResultsText}</p>
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
            const displayName = this.getCurrencyName(result, currentLang);
            return `
                <div class="result-item ${isPinned ? 'pinned' : ''}" ondblclick="fxCompare.togglePin('${result.code}')">
                    <div class="result-currency">
                        <div class="currency-flag">${result.flag}</div>
                        <div>
                            <div class="currency-name">${displayName}</div>
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
                    nameEn: currency.nameEn,
                    nameFr: currency.nameFr,
                    nameEs: currency.nameEs,
                    nameJa: currency.nameJa,
                    nameDe: currency.nameDe,
                    nameKo: currency.nameKo,
                    nameRu: currency.nameRu,
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
        
        // 根据当前语言设置星期名称
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        let weekday, time;
        
        const map = {
            en: { weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], locale: 'en-US' },
            zh: { weekdays: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'], locale: 'zh-CN' },
            fr: { weekdays: ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'], locale: 'fr-FR' },
            es: { weekdays: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'], locale: 'es-ES' },
            ja: { weekdays: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'], locale: 'ja-JP' },
            de: { weekdays: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'], locale: 'de-DE' },
            ko: { weekdays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], locale: 'ko-KR' },
            ru: { weekdays: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], locale: 'ru-RU' }
        };
        const loc = map[currentLang] || map.en;
        weekday = loc.weekdays[now.getDay()];
        time = now.toLocaleTimeString(loc.locale, { hour12: false });
        
        const formattedTime = `${year}-${month}-${day} ${weekday} ${time}`;
        
        // 更新时间显示（所有语言分别更新）
        const lastUpdateElements = {
            zh: document.getElementById('lastUpdate'),
            en: document.getElementById('lastUpdateEn'),
            fr: document.getElementById('lastUpdateFr'),
            es: document.getElementById('lastUpdateEs'),
            ja: document.getElementById('lastUpdateJa'),
            de: document.getElementById('lastUpdateDe'),
            ko: document.getElementById('lastUpdateKo'),
            ru: document.getElementById('lastUpdateRu')
        };
        
        // 更新所有语言的时间显示
        Object.values(lastUpdateElements).forEach(element => {
            if (element) element.textContent = formattedTime;
        });
    }
    
    // 添加API状态显示
    showAPIStatus(status, message) {
        const currentLang = document.body.getAttribute('data-lang') || 'zh';
        const statusMessages = {
            en: {
                'success': 'Exchange rate data updated',
                'error': 'Unable to fetch latest rates, using backup data',
                'loading': 'Fetching exchange rate data...'
            },
            zh: {
                'success': '汇率数据已更新',
                'error': '无法获取最新汇率，使用备用数据',
                'loading': '正在获取汇率数据...'
            },
            fr: {
                'success': 'Données de taux de change mises à jour',
                'error': 'Impossible de récupérer les derniers taux, utilisation des données de sauvegarde',
                'loading': 'Récupération des données de taux de change...'
            },
            es: {
                'success': 'Datos de tipos de cambio actualizados',
                'error': 'No se pueden obtener los últimos tipos, usando datos de respaldo',
                'loading': 'Obteniendo datos de tipos de cambio...'
            },
            ja: {
                'success': '為替レートデータが更新されました',
                'error': '最新レートを取得できません、バックアップデータを使用します',
                'loading': '為替レートデータを取得中...'
            },
            de: {
                'success': 'Wechselkursdaten aktualisiert',
                'error': 'Neueste Kurse können nicht abgerufen werden, verwende Backup-Daten',
                'loading': 'Wechselkursdaten werden abgerufen...'
            },
            ko: {
                'success': '환율 데이터가 업데이트되었습니다',
                'error': '최신 환율을 가져올 수 없습니다, 백업 데이터를 사용합니다',
                'loading': '환율 데이터를 가져오는 중...'
            },
            ru: {
                'success': 'Данные курсов валют обновлены',
                'error': 'Не удается получить последние курсы, используются резервные данные',
                'loading': 'Получение данных курсов валют...'
            }
        };
        
        const langMessages = statusMessages[currentLang] || statusMessages.en;
        const finalMessage = langMessages[status] || message;
        this.showToast(finalMessage, status);
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
                    type === 'error' ? 'exclamation-circle' : 
                    type === 'warning' ? 'exclamation-triangle' : 'info-circle';
        
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
    toggleLanguage() {
        console.log('toggleLanguage函数被调用');
        
        const currentLang = document.body.getAttribute('data-lang') || 'en';
        const supportedLangs = ['en', 'zh', 'ru', 'ja', 'fr', 'es', 'de', 'ko'];
        const currentIndex = supportedLangs.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % supportedLangs.length;
        const newLang = supportedLangs[nextIndex];
        
        console.log('当前语言:', currentLang);
        console.log('切换到语言:', newLang);
        
        // 设置新的语言
        document.body.setAttribute('data-lang', newLang);
        localStorage.setItem('lang', newLang);
        
        // 更新按钮显示
        this.updateLanguageButton(newLang);
        
        // 更新页面内容
        updatePageLanguage(newLang);
        
        // 更新货币选择器
        this.refreshAllCurrencySelectors();
        
        // 更新汇总结果
        this.updateSummaryResults();
        
        // 更新时间显示
        this.updateLastUpdateTime();
        
        console.log('语言切换完成');
    }
    
    updateLanguageButton(lang) {
        const languageText = document.getElementById('languageText');
        if (languageText) {
            const langMap = {
                'en': 'EN',
                'zh': '中文',
                'fr': 'FR',
                'es': 'ES',
                'ja': '日本語',
                'de': 'DE',
                'ko': '한국어',
                'ru': 'RU'
            };
            languageText.textContent = langMap[lang] || 'EN';
        }
    }
}

// 全局函数
function addCurrencyInput() {
    fxCompare.addCurrencyInput();
}

// 语言面板显示/隐藏功能
function showLanguagePanel() {
    console.log('显示语言面板');
    const panel = document.getElementById('languagePanel');
    if (panel) {
        panel.classList.add('show');
        
        // 标记当前选中的语言
        const currentLang = document.body.getAttribute('data-lang') || 'en';
        const items = panel.querySelectorAll('.language-item');
        items.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === currentLang) {
                item.classList.add('active');
            }
        });
        
        console.log('语言面板显示完成');
    } else {
        console.error('语言面板元素未找到');
    }
}

function hideLanguagePanel() {
    console.log('隐藏语言面板');
    const panel = document.getElementById('languagePanel');
    if (panel) {
        panel.classList.remove('show');
        console.log('语言面板隐藏完成');
    } else {
        console.error('语言面板元素未找到');
    }
}

function selectLanguage(lang) {
    console.log('选择语言:', lang);
    
    if (fxCompare) {
        // 设置新的语言
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        
        // 更新按钮显示
        fxCompare.updateLanguageButton(lang);
        
        // 更新页面内容
        updatePageLanguage(lang);
        
        // 更新货币选择器
        fxCompare.refreshAllCurrencySelectors();
        
        // 更新汇总结果
        fxCompare.updateSummaryResults();
        
        // 更新时间显示
        fxCompare.updateLastUpdateTime();
        
        // 隐藏语言面板
        hideLanguagePanel();
        
        console.log('语言切换完成');
    } else {
        console.error('fxCompare对象未初始化');
    }
}

function addTargetCurrencyInput() {
    fxCompare.addTargetCurrencyInput();
}

function refreshRates() {
    if (fxCompare.isLoading) {
        fxCompare.showToast('正在更新中，请稍候...', 'warning');
        return;
    }
    
    fxCompare.loadExchangeRates();
}

// 截图与分享功能 - Canvas绘制版本
// 生成格式化的文件名
function generateFilename() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `FXC_${year}${month}${day}${hours}${minutes}${seconds}.png`;
}

async function capturePanelsAndDownload() {
    console.log('capturePanelsAndDownload函数被调用');
    try {
        console.log('使用Canvas绘制方法...');
        const canvas = await createImageCanvas();
        
        // 下载图片
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = generateFilename();
        a.click();
        
        if (fxCompare) {
            fxCompare.showToast('图片已下载', 'success');
        } else {
            alert('图片已下载');
        }
    } catch (e) {
        console.error('导出失败:', e);
        // 显示错误消息
        if (fxCompare) {
            fxCompare.showToast('导出失败，请重试', 'error');
        } else {
            alert('导出失败，请重试');
        }
    }
}

// 使用Canvas API创建图片
async function createImageCanvas() {
    const lang = document.body.getAttribute('data-lang') || 'en';
    
    // 获取简化的数据
    const sourceCurrencies = getSourceCurrencies();
    const targetCurrencies = getTargetCurrencies();
    const pinnedSummary = getPinnedSummary();
    
    // 调试信息
    console.log('源货币数据:', sourceCurrencies);
    console.log('目标货币数据:', targetCurrencies);
    console.log('顶置汇总数据:', pinnedSummary);
    
    // 计算动态高度
    const baseHeight = 200; // 标题区域高度
    const panelSpacing = 60; // 面板间距（增加）
    const panelPadding = 120; // 面板内边距（增加）
    const edgeMargin = 80; // 边缘边距（新增）
    
    // 计算每个面板需要的高度
    const sourceHeight = Math.max(200, 80 + (sourceCurrencies.length * 40) + 40);
    const targetHeight = Math.max(200, 80 + (targetCurrencies.length * 40) + 40);
    const summaryHeight = Math.max(200, 80 + (pinnedSummary.length * 40) + 40);
    
    // 计算总高度
    const totalHeight = baseHeight + panelSpacing + Math.max(sourceHeight, targetHeight) + panelSpacing + summaryHeight + panelPadding;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 设置画布尺寸（动态高度）
    canvas.width = 1600;
    canvas.height = totalHeight;
    
    // 背景渐变
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0c0c0c');
    gradient.addColorStop(0.5, '#1a1a1a');
    gradient.addColorStop(1, '#2a2a2a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 设置字体（2倍分辨率）
    ctx.font = 'bold 48px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#00d4ff';
    
    // 标题
    ctx.textAlign = 'center';
    ctx.fillText('FXCompare.Online', canvas.width / 2, 100);
    
    // 副标题（支持所有语言）
    ctx.font = '32px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#b8b8b8';
    const subtitles = {
        en: 'Exchange Rate Comparison',
        zh: '汇率对比',
        fr: 'Comparaison des taux de change',
        es: 'Comparación de tipos de cambio',
        ja: '為替レート比較',
        de: 'Wechselkursvergleich',
        ko: '환율 비교',
        ru: 'Сравнение курсов валют'
    };
    const subtitle = subtitles[lang] || subtitles.en;
    ctx.fillText(subtitle, canvas.width / 2, 160);
    
    // 时间戳
    ctx.font = '24px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#888';
    const timestamp = new Date().toLocaleString();
    ctx.fillText(timestamp, canvas.width / 2, 200);
    
    // 面板标题（支持所有语言）
    const panelTitles = {
        en: {
            source: 'Source Currencies',
            target: 'Target Currencies',
            summary: 'Pinned Summary'
        },
        zh: {
            source: '源货币',
            target: '目标货币',
            summary: '顶置汇总'
        },
        fr: {
            source: 'Devises sources',
            target: 'Devises cibles',
            summary: 'Résumé épinglé'
        },
        es: {
            source: 'Monedas origen',
            target: 'Monedas objetivo',
            summary: 'Resumen fijado'
        },
        ja: {
            source: 'ソース通貨',
            target: 'ターゲット通貨',
            summary: 'ピン留めサマリー'
        },
        de: {
            source: 'Quellwährungen',
            target: 'Zielwährungen',
            summary: 'Angeheftete Zusammenfassung'
        },
        ko: {
            source: '소스 통화',
            target: '대상 통화',
            summary: '고정 요약'
        },
        ru: {
            source: 'Исходные валюты',
            target: 'Целевые валюты',
            summary: 'Закрепленная сводка'
        }
    };
    
    const titles = panelTitles[lang] || panelTitles.en;
    
    // 计算面板位置
    const panelStartY = baseHeight + panelSpacing;
    const availableWidth = canvas.width - (edgeMargin * 2); // 可用宽度
    const panelSpacingX = 60; // 面板间距（减少）
    const panelWidth = Math.floor((availableWidth - panelSpacingX) / 2); // 平均分配宽度
    
    // 绘制源货币面板（动态高度）
    drawCurrencyPanel(ctx, sourceCurrencies, edgeMargin, panelStartY, panelWidth, sourceHeight, titles.source, lang);
    
    // 绘制目标货币面板（动态高度）
    drawCurrencyPanel(ctx, targetCurrencies, edgeMargin + panelWidth + panelSpacingX, panelStartY, panelWidth, targetHeight, titles.target, lang);
    
    // 绘制顶置汇总面板（动态高度，全宽）
    const summaryY = panelStartY + Math.max(sourceHeight, targetHeight) + panelSpacing;
    const summaryWidth = availableWidth; // 使用可用宽度
    drawSummaryPanel(ctx, pinnedSummary, edgeMargin, summaryY, summaryWidth, summaryHeight, titles.summary, lang);
    
    return canvas;
}

// 绘制货币面板
function drawCurrencyPanel(ctx, currencies, x, y, width, height, title, lang) {
    // 确保面板不超出画布边界，使用更大的边缘边距
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const edgeMargin = 80; // 边缘边距
    
    // 调整位置和尺寸，确保不超出边界
    const adjustedX = Math.max(edgeMargin, Math.min(x, canvasWidth - width - edgeMargin));
    const adjustedY = Math.max(edgeMargin, Math.min(y, canvasHeight - height - edgeMargin));
    const adjustedWidth = Math.min(width, canvasWidth - adjustedX - edgeMargin);
    const adjustedHeight = Math.min(height, canvasHeight - adjustedY - edgeMargin);
    
    // 面板背景
    ctx.fillStyle = 'rgba(42, 42, 42, 0.8)';
    ctx.fillRect(adjustedX, adjustedY, adjustedWidth, adjustedHeight);
    
    // 面板边框（2倍分辨率）
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(adjustedX, adjustedY, adjustedWidth, adjustedHeight);
    
    // 标题（2倍分辨率）
    ctx.font = 'bold 32px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#00d4ff';
    ctx.textAlign = 'left';
    ctx.fillText(title, adjustedX + 30, adjustedY + 50);
    
    // 内容（2倍分辨率）
    ctx.font = '24px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#ffffff';
    
    let lineY = adjustedY + 90;
    const maxLines = Math.floor((adjustedHeight - 90) / 32); // 计算最大行数
    
    if (currencies.length === 0) {
        const noDataTexts = {
            en: 'No currencies selected',
            zh: '未选择货币',
            fr: 'Aucune devise sélectionnée',
            es: 'No hay monedas seleccionadas',
            ja: '通貨が選択されていません',
            de: 'Keine Währungen ausgewählt',
            ko: '선택된 통화가 없습니다',
            ru: 'Валюты не выбраны'
        };
        const noDataText = noDataTexts[lang] || noDataTexts.en;
        ctx.fillText(noDataText, adjustedX + 30, lineY);
    } else {
        const displayCurrencies = currencies.slice(0, maxLines); // 限制显示数量
        displayCurrencies.forEach(currency => {
            const text = `${currency.code} ${currency.name}: ${currency.amount.toFixed(2)}`;
            ctx.fillText(text, adjustedX + 30, lineY);
            lineY += 32;
        });
        
        // 如果货币数量超过显示限制，显示省略号
        if (currencies.length > maxLines) {
            ctx.fillText('...', adjustedX + 30, lineY);
        }
    }
}

// 绘制汇总面板
function drawSummaryPanel(ctx, summary, x, y, width, height, title, lang) {
    // 确保面板不超出画布边界，使用更大的边缘边距
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const edgeMargin = 80; // 边缘边距
    
    // 调整位置和尺寸，确保不超出边界
    const adjustedX = Math.max(edgeMargin, Math.min(x, canvasWidth - width - edgeMargin));
    const adjustedY = Math.max(edgeMargin, Math.min(y, canvasHeight - height - edgeMargin));
    const adjustedWidth = Math.min(width, canvasWidth - adjustedX - edgeMargin);
    const adjustedHeight = Math.min(height, canvasHeight - adjustedY - edgeMargin);
    
    // 面板背景
    ctx.fillStyle = 'rgba(42, 42, 42, 0.8)';
    ctx.fillRect(adjustedX, adjustedY, adjustedWidth, adjustedHeight);
    
    // 面板边框（2倍分辨率）
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(adjustedX, adjustedY, adjustedWidth, adjustedHeight);
    
    // 标题（2倍分辨率）
    ctx.font = 'bold 32px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#00d4ff';
    ctx.textAlign = 'left';
    ctx.fillText(title, adjustedX + 30, adjustedY + 50);
    
    // 内容（2倍分辨率）
    ctx.font = '24px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#ffffff';
    
    let lineY = adjustedY + 90;
    const maxLines = Math.floor((adjustedHeight - 90) / 32); // 计算最大行数
    
    if (summary.length === 0) {
        const noDataTexts = {
            en: 'No pinned currencies',
            zh: '无顶置货币',
            fr: 'Aucune devise épinglée',
            es: 'No hay monedas fijadas',
            ja: 'ピン留めされた通貨がありません',
            de: 'Keine angehefteten Währungen',
            ko: '고정된 통화가 없습니다',
            ru: 'Нет закрепленных валют'
        };
        const noDataText = noDataTexts[lang] || noDataTexts.en;
        ctx.fillText(noDataText, adjustedX + 30, lineY);
    } else {
        const displaySummary = summary.slice(0, maxLines); // 限制显示数量
        displaySummary.forEach(item => {
            const text = `${item.code} ${item.name}: ${item.amount.toFixed(2)}`;
            ctx.fillText(text, adjustedX + 30, lineY);
            lineY += 32;
        });
        
        // 如果汇总数量超过显示限制，显示省略号
        if (summary.length > maxLines) {
            ctx.fillText('...', adjustedX + 30, lineY);
        }
    }
}

// 绘制面板（保留用于兼容性）
function drawPanel(ctx, data, x, y, width, height, title) {
    // 面板背景
    ctx.fillStyle = 'rgba(42, 42, 42, 0.8)';
    ctx.fillRect(x, y, width, height);
    
    // 面板边框（2倍分辨率）
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    
    // 标题
    ctx.font = 'bold 16px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#00d4ff';
    ctx.textAlign = 'left';
    ctx.fillText(title, x + 15, y + 25);
    
    // 内容
    ctx.font = '12px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#ffffff';
    
    const content = data?.content || '';
    const lines = wrapText(ctx, content, width - 30);
    
    let lineY = y + 45;
    for (let i = 0; i < Math.min(lines.length, 12); i++) {
        ctx.fillText(lines[i], x + 15, lineY);
        lineY += 14;
    }
}

// 文本换行
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

// 获取源货币数据
function getSourceCurrencies() {
    const currencies = [];
    
    // 直接从fxCompare对象获取数据
    if (fxCompare && fxCompare.currencyInputs) {
        fxCompare.currencyInputs.forEach(input => {
            if (input.amount > 0) {
                const currency = fxCompare.currencies.find(c => c.code === input.currency);
                if (currency) {
                    currencies.push({
                        code: input.currency,
                        name: fxCompare.getCurrencyName(currency, document.body.getAttribute('data-lang') || 'en'),
                        amount: input.amount
                    });
                }
            }
        });
    }
    
    return currencies;
}

// 获取目标货币数据
function getTargetCurrencies() {
    const currencies = [];
    
    // 直接从fxCompare对象获取数据
    if (fxCompare && fxCompare.targetCurrencyInputs) {
        fxCompare.targetCurrencyInputs.forEach((input, index) => {
            const sourceInput = fxCompare.currencyInputs[index];
            if (sourceInput && sourceInput.amount > 0) {
                const sourceCurrency = fxCompare.currencies.find(c => c.code === sourceInput.currency);
                const targetCurrency = fxCompare.currencies.find(c => c.code === input.currency);
                
                if (sourceCurrency && targetCurrency) {
                    // 计算转换金额
                    const convertedAmount = (sourceInput.amount / sourceCurrency.rate) * targetCurrency.rate;
                    
                    currencies.push({
                        code: input.currency,
                        name: fxCompare.getCurrencyName(targetCurrency, document.body.getAttribute('data-lang') || 'en'),
                        amount: convertedAmount
                    });
                }
            }
        });
    }
    
    return currencies;
}

// 获取顶置汇总数据
function getPinnedSummary() {
    const summary = [];
    
    // 直接从fxCompare对象获取数据
    if (fxCompare && fxCompare.pinnedCurrencies && fxCompare.currencyInputs) {
        const results = fxCompare.calculateResults();
        const pinnedResults = results.filter(result => fxCompare.pinnedCurrencies.includes(result.code));
        
        pinnedResults.forEach(result => {
            // 解析格式化的金额（如 "1.85K", "537.00"）
            let amount = 0;
            const amountStr = result.amount;
            if (amountStr.includes('K')) {
                amount = parseFloat(amountStr.replace('K', '')) * 1000;
            } else if (amountStr.includes('M')) {
                amount = parseFloat(amountStr.replace('M', '')) * 1000000;
            } else {
                amount = parseFloat(amountStr.replace(/[^\d.-]/g, '')) || 0;
            }
            
            if (amount > 0) {
                summary.push({
                    code: result.code,
                    name: fxCompare.getCurrencyName(result, document.body.getAttribute('data-lang') || 'en'),
                    amount: amount
                });
            }
        });
    }
    
    return summary;
}

// 获取面板数据
function getPanelData(selector) {
    const panel = document.querySelector(selector);
    if (!panel) return null;
    
    return {
        title: panel.querySelector('h2')?.textContent || '',
        content: panel.innerText || '',
        html: panel.innerHTML || ''
    };
}

// 创建导出的HTML内容
function createExportHTML(data) {
    const lang = data.language;
    const title = lang === 'en' ? 'FXCompare - Exchange Rate Comparison' : 'FXCompare - 汇率对比';
    const generated = lang === 'en' ? 'Generated on' : '生成时间';
    
    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2a2a2a 100%);
            color: #ffffff;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(26, 26, 26, 0.8);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #00d4ff;
        }
        .header h1 {
            color: #00d4ff;
            font-size: 2.5em;
            margin: 0;
            font-weight: 700;
        }
        .header p {
            color: #b8b8b8;
            margin: 10px 0 0 0;
            font-size: 1.1em;
        }
        .panels {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        .panel {
            background: rgba(42, 42, 42, 0.8);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
        }
        .panel h2 {
            color: #00d4ff;
            margin: 0 0 15px 0;
            font-size: 1.3em;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .panel h2::before {
            content: "📊";
            font-size: 1.2em;
        }
        .panel-content {
            color: #ffffff;
            white-space: pre-wrap;
            font-family: 'Courier New', monospace;
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #00d4ff;
        }
        .bottom-panel {
            background: rgba(42, 42, 42, 0.8);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
        }
        .bottom-panel h2 {
            color: #00d4ff;
            margin: 0 0 15px 0;
            font-size: 1.3em;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .bottom-panel h2::before {
            content: "📈";
            font-size: 1.2em;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #333;
            color: #b8b8b8;
            font-size: 0.9em;
        }
        @media (max-width: 768px) {
            .panels {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>FXCompare</h1>
            <p>${title}</p>
            <p><small>${generated}: ${data.timestamp}</small></p>
        </div>
        
        <div class="panels">
            <div class="panel">
                <h2>${data.leftPanel?.title || (lang === 'en' ? 'Currency Selection' : '货币选择')}</h2>
                <div class="panel-content">${data.leftPanel?.content || ''}</div>
            </div>
            
            <div class="panel">
                <h2>${data.rightPanel?.title || (lang === 'en' ? 'Target Currency Selection' : '目标货币选择')}</h2>
                <div class="panel-content">${data.rightPanel?.content || ''}</div>
            </div>
        </div>
        
        <div class="bottom-panel">
            <h2>${data.bottomPanel?.title || (lang === 'en' ? 'Conversion Summary' : '转换汇总')}</h2>
            <div class="panel-content">${data.bottomPanel?.content || ''}</div>
        </div>
        
        <div class="footer">
            <p>© 2025 FXCompare. ${lang === 'en' ? 'Data is for reference only, actual exchange rates are subject to bank announcements.' : '数据仅供参考，实际汇率以银行公布为准。'}</p>
        </div>
    </div>
</body>
</html>`;
}

// 备用导出方法 - 文本格式
async function fallbackExport() {
    const lang = document.body.getAttribute('data-lang') || 'en';
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    const bottomPanel = document.querySelector('.bottom-panel');
    
    if (!leftPanel || !rightPanel || !bottomPanel) {
        throw new Error('无法找到面板元素');
    }
    
    // 获取面板内容
    const leftContent = leftPanel.innerText;
    const rightContent = rightPanel.innerText;
    const bottomContent = bottomPanel.innerText;
    
    // 创建文本内容
    const textContent = `FXCompare - Exchange Rate Comparison
${lang === 'en' ? 'Generated on' : '生成时间'}: ${new Date().toLocaleString()}

${lang === 'en' ? 'Currency Selection' : '货币选择'}:
${leftContent}

${lang === 'en' ? 'Target Currency Selection' : '目标货币选择'}:
${rightContent}

${lang === 'en' ? 'Conversion Summary' : '转换汇总'}:
${bottomContent}

---
${lang === 'en' ? 'Generated by FXCompare' : '由FXCompare生成'}`;
    
    // 创建并下载文本文件
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = generateFilename().replace('.png', '.txt');
    a.click();
    URL.revokeObjectURL(url);
    
    if (fxCompare) {
        fxCompare.showToast('已导出为文本文件', 'success');
    } else {
        alert('已导出为文本文件');
    }
}

async function capturePanelsAndCopy() {
    // 此功能已下线，根据产品要求移除按钮，不再提供实现
}

async function shareToX() {
    try {
        console.log('分享到X/Twitter');
        
        // 生成图片
        const canvas = await createImageCanvas();
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], generateFilename(), { type: 'image/png' });
        
        const lang = document.body.getAttribute('data-lang') || 'en';
        const shareTexts = {
            en: 'Check out this exchange rate comparison from FXCompare.Online!',
            zh: '查看FXCompare.Online的汇率对比结果！',
            fr: 'Découvrez cette comparaison de taux de change de FXCompare.Online !',
            es: '¡Mira esta comparación de tipos de cambio de FXCompare.Online!',
            ja: 'FXCompare.Onlineの為替レート比較をご覧ください！',
            de: 'Schauen Sie sich diesen Wechselkursvergleich von FXCompare.Online an!',
            ko: 'FXCompare.Online의 환율 비교를 확인해보세요!',
            ru: 'Посмотрите это сравнение курсов валют от FXCompare.Online!'
        };
        const shareText = shareTexts[lang] || shareTexts.en;
        
        const shareUrl = window.location.href;
        
        // 检查是否支持Web Share API和文件分享
        if (navigator.share && navigator.canShare) {
            const shareData = {
                title: 'FXCompare.Online - Exchange Rate Comparison',
                text: `${shareText} ${shareUrl}`,
                files: [file]
            };
            
            if (navigator.canShare(shareData)) {
                try {
                    await navigator.share(shareData);
                    if (fxCompare) {
                        fxCompare.showToast('分享成功', 'success');
                    }
                    return;
                } catch (shareError) {
                    console.log('Web Share API文件分享失败:', shareError);
                }
            }
        }
        
        // 检查是否支持Web Share API（仅文本）
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'FXCompare.Online - Exchange Rate Comparison',
                    text: `${shareText} ${shareUrl}`
                });
                if (fxCompare) {
                    fxCompare.showToast('文本分享成功，请手动添加图片', 'info');
                }
                return;
            } catch (shareError) {
                console.log('Web Share API文本分享失败:', shareError);
            }
        }
        
        // 备用方案：使用Twitter Web Intent
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        
        // 下载图片
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = generateFilename();
        a.click();
        
        // 复制链接到剪贴板
        try {
            await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
            if (fxCompare) {
                fxCompare.showToast('图片已下载，链接已复制，正在打开Twitter...', 'success');
            } else {
                alert('图片已下载，链接已复制，正在打开Twitter...');
            }
        } catch (clipboardError) {
            if (fxCompare) {
                fxCompare.showToast('图片已下载，正在打开Twitter...', 'info');
            } else {
                alert('图片已下载，正在打开Twitter...');
            }
        }
        
        // 打开Twitter分享页面
        setTimeout(() => {
            window.open(twitterUrl, '_blank', 'width=600,height=400');
        }, 1000);
        
    } catch (e) {
        console.error('分享失败:', e);
        if (fxCompare) {
            fxCompare.showToast('分享失败，请重试', 'error');
        } else {
            alert('分享失败，请重试');
        }
    }
}


// 主题和语言切换功能
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 更新图标
    const themeIcon = document.getElementById('themeIcon');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    
    // 显示提示
    const currentLang = document.body.getAttribute('data-lang') || 'zh';
    const i18n = getI18nTexts(currentLang);
    const message = newTheme === 'dark' ? i18n.switchedToDarkTheme : i18n.switchedToLightTheme;
    if (fxCompare) {
        fxCompare.showToast(message, 'success');
    }
}

function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    localStorage.setItem('lang', lang);
    updatePageLanguage(lang);
}

function updatePageLanguage(lang) {
    // 更新所有按钮的title属性
    const themeBtn = document.querySelector('.theme-toggle-btn');
    const langBtn = document.querySelector('.language-toggle-btn');
    const refreshBtn = document.querySelector('.refresh-btn');
    
    const i18n = getI18nTexts(lang);
    if (themeBtn) themeBtn.title = i18n.toggleTheme;
    if (langBtn) langBtn.title = i18n.toggleLanguage;
    if (refreshBtn) refreshBtn.title = i18n.refreshRates;
    // 分享图标 title - 支持所有语言
    document.querySelectorAll('.share-icon-btn').forEach(btn => {
        const titleAttr = `data-${lang}-title`;
        const title = btn.getAttribute(titleAttr);
        if (title) {
            btn.title = title;
        } else {
            // 如果当前语言没有对应的title，回退到英文
            const enTitle = btn.getAttribute('data-en-title');
            btn.title = enTitle || '';
        }
    });

    // SEO: 非中文语言时隐藏中文摘要抓取
    const zhNodes = document.querySelectorAll('.zh-text');
    zhNodes.forEach(node => {
        if (lang !== 'zh') node.setAttribute('data-nosnippet', 'true');
        else node.removeAttribute('data-nosnippet');
    });
    
    // 静态文案替换（非结构化 zh/en 容器的英文占位）
    const mapIds = [
        ['titleTextEn','title'],
        ['lastUpdateLabelEn','lastUpdateLabel'],
        ['funcTitleEn','functionTitle'],
        ['funcDescEn','functionDesc'],
        ['leftTitleEn','leftTitle'],
        ['rightTitleEn','rightTitle'],
        ['bottomTitleEn','bottomTitle'],
        ['syncCountriesEn','syncCountries'],
        ['syncAmountsEn','syncAmounts'],
        ['syncTargetCountriesEn','syncTargetCountries'],
        ['addCurrencyEn','addCurrency'],
        ['panelInstrEn','panelInstruction'],
        ['noResultsEn','noResults'],
        ['footerEn','footerNote']
    ];
    mapIds.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (!el || !i18n[key]) return;
        if (id === 'lastUpdateLabelEn') {
            const timeEl = el.querySelector('#lastUpdate');
            const timeText = timeEl ? timeEl.textContent : '--:--';
            el.innerHTML = `${i18n[key]}<span id="lastUpdate">${timeText}</span>`;
        } else {
            el.textContent = i18n[key];
        }
    });

    // 重新渲染所有货币选择器以更新语言
    if (fxCompare) {
        fxCompare.refreshAllCurrencySelectors();
        fxCompare.updateSummaryResults();
        fxCompare.updateLastUpdateTime();
    }
    
    // 更新货币名称（如果需要的话）
    updateCurrencyNames(lang);
}

function updateCurrencyNames(lang) {
    // 这里可以添加货币名称的多语言支持
    // 目前货币名称保持英文代码，但可以扩展为多语言
    // 货币名称已更新
}

function getI18nTexts(lang) {
    const dict = {
        en: {
            toggleTheme: 'Toggle Theme',
            toggleLanguage: 'Change Language',
            refreshRates: 'Refresh Rates',
            title: 'FXCompare - Exchange Rate Comparison',
            lastUpdateLabel: 'Exchange Rate Update Time: ',
            functionTitle: 'Function Description',
            functionDesc: 'This webpage provides real-time foreign exchange rate comparison functionality, supporting simultaneous conversion of multiple currencies. Select the source currency on the left and input the amount, the right side displays the corresponding target currency conversion results. The bottom summary displays the equivalent amounts of all currencies, supporting pinning of frequently used currencies.',
            leftTitle: 'Currency Selection',
            rightTitle: 'Target Currency Selection',
            bottomTitle: 'Left Side Conversion Summary',
            syncCountries: 'Sync All Countries',
            syncAmounts: 'Sync All Amounts',
            syncTargetCountries: 'Sync All Target Countries',
            addCurrency: 'Add Currency',
            panelInstruction: 'Double-click amount to pin, or click the right button to pin',
            noResults: 'Please select currencies and enter amounts to view conversion results',
            footerNote: '© 2025 FXCompare. Data is for reference only, actual exchange rates are subject to bank announcements.'
        },
        zh: {
            toggleTheme: '切换主题',
            toggleLanguage: '切换语言',
            refreshRates: '刷新汇率',
            title: 'FXCompare - 汇率对比',
            lastUpdateLabel: '汇率更新时间: ',
            functionTitle: '功能说明',
            functionDesc: '本网页提供实时外汇汇率对比功能，支持多货币同时转换。左侧选择源货币并输入金额，右侧显示对应的目标货币转换结果。底部汇总显示所有货币的等值金额，支持顶置常用货币。',
            leftTitle: '货币选择',
            rightTitle: '目标货币选择',
            bottomTitle: '左侧转换金额汇总',
            syncCountries: '左侧所有国家一致',
            syncAmounts: '所有金额一致',
            syncTargetCountries: '右侧所有国家一致',
            addCurrency: '添加货币',
            panelInstruction: '双击金额可顶置，或点击右侧按钮顶置',
            noResults: '请选择货币并输入金额以查看转换结果',
            footerNote: '© 2025 FXCompare. 数据仅供参考，实际汇率以银行公布为准。'
        },
        fr: {
            toggleTheme: 'Changer le thème',
            toggleLanguage: 'Changer de langue',
            refreshRates: 'Actualiser les taux',
            title: 'FXCompare - Comparaison des taux de change',
            lastUpdateLabel: 'Heure de mise à jour des taux: ',
            functionTitle: 'Description des fonctionnalités',
            functionDesc: "Cette page fournit une comparaison en temps réel des taux de change, avec conversion simultanée de plusieurs devises. Sélectionnez la devise source à gauche et saisissez le montant; la droite affiche les résultats de conversion. Le bas résume les montants équivalents et permet d'épingler les devises fréquentes.",
            leftTitle: 'Sélection des devises',
            rightTitle: 'Sélection des devises cibles',
            bottomTitle: 'Résumé des conversions côté gauche',
            syncCountries: 'Synchroniser tous les pays',
            syncAmounts: 'Synchroniser tous les montants',
            syncTargetCountries: 'Synchroniser toutes les devises cibles',
            addCurrency: 'Ajouter une devise',
            panelInstruction: 'Double-cliquez pour épingler, ou utilisez le bouton à droite',
            noResults: 'Veuillez sélectionner des devises et saisir des montants pour voir les résultats',
            footerNote: '© 2025 FXCompare. Données à titre indicatif, les taux réels sont ceux des banques.'
        },
        es: {
            toggleTheme: 'Cambiar tema',
            toggleLanguage: 'Cambiar idioma',
            refreshRates: 'Actualizar tasas',
            title: 'FXCompare - Comparación de tipos de cambio',
            lastUpdateLabel: 'Hora de actualización del tipo de cambio: ',
            functionTitle: 'Descripción de funciones',
            functionDesc: 'Esta página ofrece comparación en tiempo real de tipos de cambio y conversión simultánea de múltiples monedas. Seleccione la moneda de origen a la izquierda e introduzca el monto; la derecha muestra los resultados. La parte inferior resume los importes equivalentes y permite anclar monedas frecuentes.',
            leftTitle: 'Selección de monedas',
            rightTitle: 'Selección de monedas objetivo',
            bottomTitle: 'Resumen de conversiones del lado izquierdo',
            syncCountries: 'Sincronizar todos los países',
            syncAmounts: 'Sincronizar todos los montos',
            syncTargetCountries: 'Sincronizar todas las monedas objetivo',
            addCurrency: 'Agregar moneda',
            panelInstruction: 'Doble clic para fijar o use el botón derecho',
            noResults: 'Seleccione monedas e ingrese montos para ver resultados',
            footerNote: '© 2025 FXCompare. Los datos son referenciales; los tipos reales dependen del banco.'
        },
        ja: {
            toggleTheme: 'テーマを切り替え',
            toggleLanguage: '言語を変更',
            refreshRates: 'レートを更新',
            title: 'FXCompare - 為替レート比較',
            lastUpdateLabel: '為替更新時刻: ',
            functionTitle: '機能説明',
            functionDesc: '本ページはリアルタイム為替レート比較を提供し、複数通貨の同時換算に対応します。左側で通貨と金額を入力し、右側に換算結果を表示。下部に等価金額のサマリーとピン留め機能があります。',
            leftTitle: '通貨選択',
            rightTitle: '対象通貨の選択',
            bottomTitle: '左側換算金額サマリー',
            syncCountries: '左側の国を同期',
            syncAmounts: '左側の金額を同期',
            syncTargetCountries: '右側の国を同期',
            addCurrency: '通貨を追加',
            panelInstruction: '金額をダブルクリックで固定、右のボタンでも固定可能',
            noResults: '通貨を選択し金額を入力して結果を表示',
            footerNote: '© 2025 FXCompare. 参考データであり、実際の為替は銀行に準じます。'
        },
        de: {
            toggleTheme: 'Theme wechseln',
            toggleLanguage: 'Sprache ändern',
            refreshRates: 'Kurse aktualisieren',
            title: 'FXCompare - Wechselkursvergleich',
            lastUpdateLabel: 'Aktualisierungszeit der Wechselkurse: ',
            functionTitle: 'Funktionsbeschreibung',
            functionDesc: 'Diese Seite bietet einen Echtzeit-Vergleich von Wechselkursen mit gleichzeitiger Umrechnung mehrerer Währungen. Links Quellwährungen und Betrag wählen, rechts erscheinen die Ergebnisse. Unten eine Zusammenfassung mit Anheften häufig genutzter Währungen.',
            leftTitle: 'Währungsauswahl',
            rightTitle: 'Zielwährungsauswahl',
            bottomTitle: 'Zusammenfassung linksseitiger Umrechnungen',
            syncCountries: 'Alle Länder synchronisieren',
            syncAmounts: 'Alle Beträge synchronisieren',
            syncTargetCountries: 'Alle Zielwährungen synchronisieren',
            addCurrency: 'Währung hinzufügen',
            panelInstruction: 'Doppelklick zum Anheften oder rechten Button verwenden',
            noResults: 'Bitte Währungen wählen und Beträge eingeben, um Ergebnisse zu sehen',
            footerNote: '© 2025 FXCompare. Daten ohne Gewähr; maßgeblich sind Bankkurse.'
        },
        ko: {
            toggleTheme: '테마 전환',
            toggleLanguage: '언어 변경',
            refreshRates: '환율 새로고침',
            title: 'FXCompare - 환율 비교',
            lastUpdateLabel: '환율 업데이트 시간: ',
            functionTitle: '기능 설명',
            functionDesc: '이 페이지는 실시간 외환 환율 비교 기능을 제공하며 여러 통화의 동시 변환을 지원합니다. 왼쪽에서 소스 통화를 선택하고 금액을 입력하면 오른쪽에 대상 통화 변환 결과가 표시됩니다. 하단 요약에는 모든 통화의 등가 금액이 표시되며 자주 사용하는 통화를 고정할 수 있습니다.',
            leftTitle: '통화 선택',
            rightTitle: '대상 통화 선택',
            bottomTitle: '왼쪽 변환 금액 요약',
            syncCountries: '모든 국가 동기화',
            syncAmounts: '모든 금액 동기화',
            syncTargetCountries: '모든 대상 통화 동기화',
            addCurrency: '통화 추가',
            panelInstruction: '더블 클릭하여 고정하거나 오른쪽 버튼 사용',
            noResults: '통화를 선택하고 금액을 입력하여 결과 보기',
            footerNote: '© 2025 FXCompare. 데이터는 참고용이며 실제 환율은 은행 공지에 따릅니다.'
        },
        ru: {
            toggleTheme: 'Переключить тему',
            toggleLanguage: 'Изменить язык',
            refreshRates: 'Обновить курсы',
            title: 'FXCompare - Сравнение курсов валют',
            lastUpdateLabel: 'Время обновления курса: ',
            functionTitle: 'Описание функций',
            functionDesc: 'Эта страница предоставляет функцию сравнения курсов валют в реальном времени и поддерживает одновременную конвертацию нескольких валют. Выберите исходную валюту слева и введите сумму, справа отобразятся результаты конвертации в целевую валюту. В нижней сводке отображаются эквивалентные суммы всех валют с возможностью закрепления часто используемых валют.',
            leftTitle: 'Выбор валюты',
            rightTitle: 'Выбор целевой валюты',
            bottomTitle: 'Сводка конвертации левой стороны',
            syncCountries: 'Синхронизировать все страны',
            syncAmounts: 'Синхронизировать все суммы',
            syncTargetCountries: 'Синхронизировать все целевые валюты',
            addCurrency: 'Добавить валюту',
            panelInstruction: 'Двойной клик для закрепления или используйте правую кнопку',
            noResults: 'Выберите валюты и введите суммы для просмотра результатов',
            footerNote: '© 2025 FXCompare. Данные носят справочный характер, фактические курсы устанавливаются банками.'
        }
    };
    // 通用字段：输入占位与目标金额占位
    Object.assign(dict.en, { 
        enterAmount: 'Enter amount', 
        convertedAmount: 'Converted Amount', 
        noResults: 'Please select currencies and enter amounts to view conversion results',
        switchedToDarkTheme: 'Switched to dark theme',
        switchedToLightTheme: 'Switched to light theme'
    });
    Object.assign(dict.zh, { 
        enterAmount: '输入金额', 
        convertedAmount: '转换金额', 
        noResults: '请选择货币并输入金额以查看转换结果',
        switchedToDarkTheme: '已切换到暗色主题',
        switchedToLightTheme: '已切换到亮色主题'
    });
    Object.assign(dict.fr, { 
        enterAmount: 'Saisir le montant', 
        convertedAmount: 'Montant converti', 
        noResults: 'Veuillez sélectionner des devises et saisir des montants pour voir les résultats',
        switchedToDarkTheme: 'Passé au thème sombre',
        switchedToLightTheme: 'Passé au thème clair'
    });
    Object.assign(dict.es, { 
        enterAmount: 'Introducir monto', 
        convertedAmount: 'Importe convertido', 
        noResults: 'Seleccione monedas e ingrese montos para ver resultados',
        switchedToDarkTheme: 'Cambiado al tema oscuro',
        switchedToLightTheme: 'Cambiado al tema claro'
    });
    Object.assign(dict.ja, { 
        enterAmount: '金額を入力', 
        convertedAmount: '換算額', 
        noResults: '通貨を選択し金額を入力して結果を表示',
        switchedToDarkTheme: 'ダークテーマに切り替えました',
        switchedToLightTheme: 'ライトテーマに切り替えました'
    });
    Object.assign(dict.de, { 
        enterAmount: 'Betrag eingeben', 
        convertedAmount: 'Umgerechneter Betrag', 
        noResults: 'Bitte Währungen wählen und Beträge eingeben, um Ergebnisse zu sehen',
        switchedToDarkTheme: 'Zu dunklem Theme gewechselt',
        switchedToLightTheme: 'Zu hellem Theme gewechselt'
    });
    Object.assign(dict.ko, { 
        enterAmount: '금액 입력', 
        convertedAmount: '변환 금액', 
        noResults: '통화를 선택하고 금액을 입력하여 결과 보기',
        switchedToDarkTheme: '다크 테마로 전환되었습니다',
        switchedToLightTheme: '라이트 테마로 전환되었습니다'
    });
    Object.assign(dict.ru, { 
        enterAmount: 'Введите сумму', 
        convertedAmount: 'Конвертированная сумма', 
        noResults: 'Выберите валюты и введите суммы для просмотра результатов',
        switchedToDarkTheme: 'Переключено на темную тему',
        switchedToLightTheme: 'Переключено на светлую тему'
    });
    return dict[lang] || dict.en;
}

// 初始化主题和语言
function initializeThemeAndLanguage() {
    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // 初始化语言（支持 URL 参数覆盖）
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    const supportedLangs = ['en', 'zh', 'fr', 'es', 'ja', 'de', 'ko', 'ru'];
    let initialLang = 'en'; // 默认英语
    
    // 优先使用URL参数
    if (queryLang && supportedLangs.includes(queryLang)) {
        initialLang = queryLang;
        console.log('使用URL参数语言:', initialLang);
    } else {
        // 其次使用本地存储的语言设置
        const savedLang = localStorage.getItem('lang');
        if (savedLang && supportedLangs.includes(savedLang)) {
            initialLang = savedLang;
            console.log('使用本地存储语言:', initialLang);
        } else {
            console.log('使用默认语言: 英语');
        }
    }
    document.body.setAttribute('data-lang', initialLang);
    localStorage.setItem('lang', initialLang);
    
    // 设置语言按钮的显示
    const languageText = document.getElementById('languageText');
    if (languageText) {
        const langMap = {
            'en': 'EN',
            'zh': '中文',
            'fr': 'FR',
            'es': 'ES',
            'ja': '日本語',
            'de': 'DE',
            'ko': '한국어',
            'ru': 'RU'
        };
        languageText.textContent = langMap[initialLang] || 'EN';
        console.log('设置语言按钮初始值:', initialLang);
    } else {
        console.error('初始化时未找到语言按钮');
    }
    
    // 语言初始化完成
    updatePageLanguage(initialLang);
}

// Google Analytics事件发送
function sendAnalyticsEvent() {
    // 检查Google Analytics是否已加载
    if (typeof gtag !== 'undefined') {
        // 发送页面浏览事件到Google Analytics
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href
        });
    }
}


// 测试函数
function testFunctions() {
    console.log('=== 开始测试功能 ===');
    
    // 测试语言选择器
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        console.log('✓ 语言选择器找到');
        console.log('当前值:', languageSelect.value);
    } else {
        console.error('✗ 语言选择器未找到');
    }
    
    // 测试fxCompare对象
    if (fxCompare) {
        console.log('✓ fxCompare对象已初始化');
    } else {
        console.error('✗ fxCompare对象未初始化');
    }
    
    // 测试html2canvas
    if (typeof html2canvas !== 'undefined') {
        console.log('✓ html2canvas库已加载');
    } else {
        console.error('✗ html2canvas库未加载');
    }
    
    console.log('=== 测试完成 ===');
}

// 测试语言切换按钮
function testLanguageButton() {
    console.log('=== 语言切换按钮测试 ===');
    
    const languageButton = document.querySelector('.language-toggle-btn');
    const languageText = document.getElementById('languageText');
    const languagePanel = document.getElementById('languagePanel');
    
    if (!languageButton) {
        console.error('✗ 语言切换按钮未找到');
        return;
    }
    
    if (!languageText) {
        console.error('✗ 语言文本元素未找到');
        return;
    }
    
    if (!languagePanel) {
        console.error('✗ 语言面板未找到');
        return;
    }
    
    console.log('✓ 语言切换按钮找到');
    console.log('✓ 语言面板找到');
    console.log('当前显示:', languageText.textContent);
    console.log('当前语言:', document.body.getAttribute('data-lang'));
    
    // 测试面板显示（不自动切换语言）
    console.log('测试面板显示...');
    showLanguagePanel();
    
    setTimeout(() => {
        const isVisible = languagePanel.classList.contains('show');
        console.log('面板是否显示:', isVisible);
        
        if (isVisible) {
            console.log('面板显示测试完成，语言切换测试已禁用');
            // 隐藏面板
            hideLanguagePanel();
        }
    }, 100);
    
    console.log('语言切换按钮测试完成');
    console.log('提示：现在点击语言按钮会显示语言面板');
}

// 手动切换语言的全局函数
function switchLanguage(lang) {
    console.log('手动切换语言到:', lang);
    
    if (fxCompare) {
        // 直接设置语言
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        
        // 更新按钮显示
        fxCompare.updateLanguageButton(lang);
        
        // 更新页面内容
        updatePageLanguage(lang);
        
        // 更新其他组件
        fxCompare.refreshAllCurrencySelectors();
        fxCompare.updateSummaryResults();
        fxCompare.updateLastUpdateTime();
        
        console.log('语言切换完成');
    } else {
        console.error('fxCompare对象未初始化');
    }
}

// 简单测试函数
function testLanguagePanel() {
    console.log('=== 语言面板简单测试 ===');
    
    // 测试元素是否存在
    const button = document.querySelector('.language-toggle-btn');
    const panel = document.getElementById('languagePanel');
    const text = document.getElementById('languageText');
    
    console.log('按钮元素:', button);
    console.log('面板元素:', panel);
    console.log('文本元素:', text);
    
    if (button) {
        console.log('按钮类名:', button.className);
        console.log('按钮onclick:', button.getAttribute('onclick'));
    }
    
    if (panel) {
        console.log('面板类名:', panel.className);
        console.log('面板样式:', window.getComputedStyle(panel).display);
    }
    
    // 测试函数是否存在
    console.log('showLanguagePanel函数:', typeof showLanguagePanel);
    console.log('hideLanguagePanel函数:', typeof hideLanguagePanel);
    console.log('selectLanguage函数:', typeof selectLanguage);
    
    // 测试面板显示（不自动切换语言）
    console.log('测试面板显示...');
    try {
        showLanguagePanel();
        console.log('面板显示成功');
        
        setTimeout(() => {
            console.log('面板显示测试完成，语言切换测试已禁用');
            // 隐藏面板
            hideLanguagePanel();
        }, 500);
    } catch (error) {
        console.error('面板操作失败:', error);
    }
    
    console.log('测试完成');
    console.log('提示：现在点击语言按钮会显示语言面板');
}

// 将测试函数添加到全局作用域
window.testFunctions = testFunctions;
window.testLanguageButton = testLanguageButton;
window.testLanguagePanel = testLanguagePanel;
window.switchLanguage = switchLanguage;

// 初始化应用
let fxCompare;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded事件触发');
    
    // 先初始化主题和语言
    initializeThemeAndLanguage();
    console.log('主题和语言初始化完成');
    
    // 然后初始化应用
    fxCompare = new FXCompare();
    console.log('FXCompare对象初始化完成');
    
    // 发送分析事件
    sendAnalyticsEvent();

    // 语言切换按钮现在通过点击显示面板
    console.log('语言切换按钮初始化完成');
    
    // 添加点击外部关闭面板的事件监听器
    document.addEventListener('click', (event) => {
        const languageButton = document.querySelector('.language-toggle-btn');
        const languagePanel = document.getElementById('languagePanel');
        
        if (languagePanel && languagePanel.classList.contains('show') &&
            !languageButton.contains(event.target) && 
            !languagePanel.contains(event.target)) {
            hideLanguagePanel();
        }
    });
    
    // 测试函数已移除，避免页面加载时自动切换语言
    // 如需测试，请在控制台手动调用：testFunctions(), testLanguageButton(), testLanguagePanel()
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
        // 页面加载完成
        
        // 发送到Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'value': loadTime,
                'event_category': 'Performance'
            });
        }
    });
}
