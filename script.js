// 丰容数据
const enrichmentData = {
    environment: {
        name: "环境丰容",
        activities: [
            {
                title: "重新布置房间",
                description: "改变家具摆放，创造新的空间感受",
                tags: ["室内", "免费", "30分钟"],
                details: "通过重新安排家具位置，为熟悉的空间注入新鲜感。尝试不同的布局方案，发现空间的新可能性。"
            },
            {
                title: "探索附近新街道",
                description: "在熟悉的区域发现未曾走过的路径",
                tags: ["户外", "免费", "1小时"],
                details: "即使在熟悉的社区，也总有未曾探索的角落。带着好奇心出发，发现身边的惊喜。"
            },
            {
                title: "在不同地点工作",
                description: "改变工作环境，刺激创造力",
                tags: ["工作", "低成本", "灵活时间"],
                details: "咖啡厅、图书馆、公园...不同的环境能激发不同的思维模式，提升工作效率和创意。"
            }
        ]
    },
    social: {
        name: "社交丰容",
        activities: [
            {
                title: "参加社区活动",
                description: "融入本地社群，建立新的社交联系",
                tags: ["社区", "免费", "2-3小时"],
                details: "社区活动是认识邻居、了解本地文化的绝佳机会。从志愿服务到兴趣小组，总有适合你的活动。"
            },
            {
                title: "学习新的沟通技巧",
                description: "提升人际交往能力，丰富社交体验",
                tags: ["技能", "自我提升", "持续学习"],
                details: "学习积极倾听、非暴力沟通等技巧，让每次交流都更有意义，建立更深层的人际连接。"
            },
            {
                title: "组织小型聚会",
                description: "主动创造社交机会，加深友谊",
                tags: ["聚会", "中等成本", "半天"],
                details: "不需要复杂的安排，简单的茶话会或游戏夜就能让朋友们聚在一起，创造美好回忆。"
            }
        ]
    },
    cognitive: {
        name: "认知丰容",
        activities: [
            {
                title: "学习新语言",
                description: "开启新的思维模式和文化视角",
                tags: ["学习", "长期投资", "每日30分钟"],
                details: "每种语言都代表一种独特的思维方式。通过学习新语言，你不仅获得沟通工具，更能拓展认知边界。"
            },
            {
                title: "尝试解谜游戏",
                description: "锻炼逻辑思维和问题解决能力",
                tags: ["游戏", "免费", "随时"],
                details: "数独、填字游戏、逻辑谜题...这些看似简单的游戏能有效训练大脑，提升认知灵活性。"
            },
            {
                title: "阅读不同领域书籍",
                description: "跨界学习，建立知识连接",
                tags: ["阅读", "中等成本", "灵活时间"],
                details: "走出舒适圈，阅读平时不会接触的领域。科学、艺术、历史...每个领域都能为你的思维增添新维度。"
            }
        ]
    },
    selfcare: {
        name: "自我关怀",
        activities: [
            {
                title: "建立晨间仪式",
                description: "用有意识的行为开启每一天",
                tags: ["习惯", "免费", "30分钟"],
                details: "创造属于自己的晨间时光：冥想、写日记、做瑜伽...让每天都以正念和感恩开始。"
            },
            {
                title: "尝试新的放松技巧",
                description: "探索适合自己的减压方式",
                tags: ["放松", "免费", "15-30分钟"],
                details: "深呼吸、渐进式肌肉放松、正念冥想...找到最适合你的放松方法，建立情绪调节技能。"
            },
            {
                title: "记录感恩日记",
                description: "培养积极心态，关注生活美好",
                tags: ["写作", "免费", "10分钟"],
                details: "每天记录三件值得感恩的事，无论大小。这个简单的习惯能显著提升幸福感和生活满意度。"
            }
        ]
    },
    lifestyle: {
        name: "生活方式扩展",
        activities: [
            {
                title: "尝试新的烹饪风格",
                description: "通过美食探索不同文化",
                tags: ["烹饪", "中等成本", "1-2小时"],
                details: "从泰式咖喱到意大利面，每道菜都是一次文化之旅。在厨房里环游世界，用味蕾感受多元文化。"
            },
            {
                title: "学习新的艺术形式",
                description: "用创作表达内心世界",
                tags: ["艺术", "低成本", "灵活时间"],
                details: "绘画、音乐、舞蹈、写作...艺术创作不仅是技能学习，更是情感表达和自我探索的途径。"
            },
            {
                title: "制定主题月挑战",
                description: "为生活设定有趣的目标和节奏",
                tags: ["挑战", "免费", "一个月"],
                details: "每月设定一个主题：读书月、运动月、创作月...让生活有目标有节奏，每个月都有新的成长。"
            }
        ]
    }
};

// 随机表情符号URL列表
const emojiUrls = [
    "http://biaoqing.gtimg.com/back/yuntu/o/5a85d95eeaea0d1b7a01f03dc93a5bbc.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/62d07109d9f91ca193d9330a48e9f5c9.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/69f7cdf9e813d37baa247ec11b0f0e82.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/b2f59b75be88fef650adfa5cbe356271.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/927fac6e635d7cbd488b4e02ff73a1f8.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/4cf3d2bd3ba95d6a52c31cbfd8168b88.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/753a2c13345f2297a1838da65f9a2969.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/08188c82b4fc79b3858e8d64a4a7388d.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/479e8670cd4f00366ba8c6e0881787de.jpg",
    "http://biaoqing.gtimg.com/back/yuntu/o/cff9f2772c322a5ad343bb1b9d56a602.jpg"
];

// 主题对应的表情符号
const themeEmojis = {
    default: "🌟",
    pixel: "👾",
    neobrutalism: "💥",
    terminal: "💻",
    memphis: "🎨",
    "liquid-glass": "💎"
};

// 主题对应的头部表情包
const themeHeaderImages = {
    default: "http://biaoqing.gtimg.com/back/yuntu/o/7c859220acc1c85fc8f1449ffbd9efee.jpg",
    pixel: "http://biaoqing.gtimg.com/product/200678/o/afd9acb955da97039c24647ef349d846.gif",
    neobrutalism: "http://biaoqing.gtimg.com/back/yuntu/o/aa599aa2b6a98094154a831e71d6c24e.gif",
    terminal: "http://biaoqing.gtimg.com/back/yuntu/o/5410186563ce17d9b166870bd4b2ea3e.gif",
    memphis: "http://biaoqing.gtimg.com/back/yuntu/o/e12dd0323a50cc6675b552401616ff51.gif",
    "liquid-glass": "http://biaoqing.gtimg.com/back/yuntu/o/3e9fbfc5416e062c10853685e6c43ed6.gif"
};

let currentDimension = 'all';
let currentMood = null;

// DOM元素
const cardsContainer = document.getElementById('cardsContainer');
const dimensionTabs = document.querySelectorAll('.dimension-tab');
const moodButtons = document.querySelectorAll('.mood-btn');
const mysteryBox = document.getElementById('mysteryBox');
const modal = document.getElementById('cardModal');
const modalClose = document.getElementById('modalClose');
const themeSelector = document.getElementById('themeSelector');
const headerEmoji = document.getElementById('headerEmoji');
const headerEmojiImg = document.getElementById('headerEmojiImg');

// 获取随机表情符号
function getRandomEmoji() {
    const randomUrl = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
    return `<img src="${randomUrl}" alt="表情包" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover;">`;
}

// 渲染卡片
function renderCards() {
    cardsContainer.innerHTML = '';
    
    const dimensionsToShow = currentDimension === 'all' 
        ? Object.keys(enrichmentData) 
        : [currentDimension];

    dimensionsToShow.forEach(dimension => {
        const dimensionData = enrichmentData[dimension];
        dimensionData.activities.forEach((activity, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-title">${activity.title}</div>
                <div class="card-description">${activity.description}</div>
                <div class="card-tags">
                    ${activity.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            
            card.addEventListener('click', () => {
                showModal(activity);
            });
            
            cardsContainer.appendChild(card);
        });
    });
}

// 显示模态框
function showModal(activity) {
    document.getElementById('modalTitle').textContent = activity.title;
    document.getElementById('modalDescription').textContent = activity.details;
    document.getElementById('modalEmoji').innerHTML = getRandomEmoji();
    document.getElementById('modalTags').innerHTML = 
        activity.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
    
    modal.classList.add('show');
}

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
}

// 切换主题
function changeTheme(theme) {
    // 移除所有主题类
    document.body.className = '';
    
    // 添加新主题类
    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
    
    // 更新头部表情符号
    headerEmoji.textContent = themeEmojis[theme] || themeEmojis.default;
    
    // 更新头部表情包图片
    headerEmojiImg.src = themeHeaderImages[theme] || themeHeaderImages.default;
    
    // 保存主题设置
    localStorage.setItem('selectedTheme', theme);
}

// 神秘盒子功能
function openMysteryBox() {
    const allActivities = [];
    Object.values(enrichmentData).forEach(dimension => {
        allActivities.push(...dimension.activities);
    });
    
    const randomActivity = allActivities[Math.floor(Math.random() * allActivities.length)];
    showModal(randomActivity);
}

// 事件监听器
dimensionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        dimensionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentDimension = tab.dataset.dimension;
        renderCards();
    });
});

moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        moodButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMood = btn.dataset.mood;
    });
});

mysteryBox.addEventListener('click', openMysteryBox);
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

themeSelector.addEventListener('change', (e) => {
    changeTheme(e.target.value);
});

// 初始化
function init() {
    // 加载保存的主题
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    themeSelector.value = savedTheme;
    changeTheme(savedTheme);
    
    // 渲染初始卡片
    renderCards();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);