<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>人类丰容 - 生活灵感库</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
            transition: all 0.3s ease;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
            position: relative;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            text-align: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .header-content {
            flex: 1;
        }

        .header-emoji-img {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 60px;
            height: 60px;
            border-radius: 8px;
            object-fit: cover;
        }

        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }

        .header p {
            font-size: 14px;
            opacity: 0.9;
        }

        .theme-selector {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .theme-selector select {
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
        }

        .theme-selector select option {
            background: #333;
            color: white;
        }

        .header-emoji {
            font-size: 48px;
            margin: 10px 0;
            display: block;
        }

        .mood-section {
            padding: 20px;
            background: #f8f9fa;
        }

        .mood-title {
            font-size: 16px;
            margin-bottom: 15px;
            color: #333;
        }

        .mood-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .mood-btn {
            background: white;
            border: 2px solid #e9ecef;
            padding: 10px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            flex: 1;
            min-width: 80px;
            text-align: center;
        }

        .mood-btn:hover {
            border-color: #667eea;
            background: #f0f4ff;
        }

        .mood-btn.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        .dimensions {
            padding: 20px;
        }

        .dimension-title {
            font-size: 18px;
            margin-bottom: 15px;
            color: #333;
        }

        .dimension-tabs {
            display: flex;
            gap: 5px;
            margin-bottom: 20px;
            overflow-x: auto;
            padding-bottom: 5px;
        }

        .dimension-tab {
            background: #f8f9fa;
            border: none;
            padding: 8px 12px;
            border-radius: 15px;
            cursor: pointer;
            white-space: nowrap;
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .dimension-tab:hover {
            background: #e9ecef;
        }

        .dimension-tab.active {
            background: #667eea;
            color: white;
        }

        .cards-container {
            display: grid;
            gap: 15px;
        }

        .card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            border-color: #667eea;
        }

        .card-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
        }

        .card-description {
            font-size: 14px;
            color: #666;
            line-height: 1.4;
            margin-bottom: 10px;
        }

        .card-tags {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
        }

        .tag {
            background: #f0f4ff;
            color: #667eea;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 11px;
        }

        .mystery-box {
            background: linear-gradient(135deg, #ff6b6b, #ffa500);
            color: white;
            text-align: center;
            margin: 20px;
            border-radius: 15px;
            padding: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .mystery-box:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(255,107,107,0.3);
        }

        .mystery-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .mystery-subtitle {
            font-size: 14px;
            opacity: 0.9;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 350px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.3s ease;
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }

        .modal-emoji {
            font-size: 64px;
            text-align: center;
            margin: 20px 0;
        }

        .modal-emoji img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: cover;
        }

        .modal-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;
            text-align: center;
        }

        .modal-description {
            font-size: 16px;
            line-height: 1.6;
            color: #666;
            margin-bottom: 20px;
        }

        .modal-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .modal-tag {
            background: #f0f4ff;
            color: #667eea;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 12px;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        /* 主题样式 */
        .theme-pixel {
            font-family: 'Courier New', monospace;
        }

        .theme-pixel .container {
            background: #0f0f23;
            color: #cccccc;
        }

        .theme-pixel .header {
            background: #1e1e3f;
            border-bottom: 2px solid #333366;
        }

        .theme-pixel .card {
            background: #1a1a2e;
            border: 1px solid #333366;
            color: #cccccc;
        }

        .theme-pixel .card:hover {
            border-color: #00ff00;
            box-shadow: 0 0 10px rgba(0,255,0,0.3);
        }

        .theme-pixel .mood-section {
            background: #16213e;
        }

        .theme-pixel .mood-btn {
            background: #1a1a2e;
            border-color: #333366;
            color: #cccccc;
        }

        .theme-pixel .mood-btn:hover,
        .theme-pixel .mood-btn.active {
            background: #00ff00;
            color: #000;
            border-color: #00ff00;
        }

        .theme-pixel .dimension-tab {
            background: #1a1a2e;
            color: #cccccc;
            border: 1px solid #333366;
        }

        .theme-pixel .dimension-tab:hover,
        .theme-pixel .dimension-tab.active {
            background: #00ff00;
            color: #000;
        }

        .theme-neobrutalism .container {
            background: #ffff00;
        }

        .theme-neobrutalism .header {
            background: #ff0080;
            border: 4px solid #000;
            box-shadow: 8px 8px 0 #000;
        }

        .theme-neobrutalism .card {
            background: #00ffff;
            border: 3px solid #000;
            box-shadow: 6px 6px 0 #000;
            border-radius: 0;
        }

        .theme-neobrutalism .card:hover {
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0 #000;
        }

        .theme-neobrutalism .mood-section {
            background: #ff6b6b;
        }

        .theme-neobrutalism .mood-btn {
            background: #fff;
            border: 3px solid #000;
            box-shadow: 4px 4px 0 #000;
            border-radius: 0;
            font-weight: bold;
        }

        .theme-neobrutalism .mood-btn:hover,
        .theme-neobrutalism .mood-btn.active {
            background: #00ff00;
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0 #000;
        }

        .theme-neobrutalism .dimension-tab {
            background: #fff;
            border: 2px solid #000;
            box-shadow: 3px 3px 0 #000;
            border-radius: 0;
            font-weight: bold;
        }

        .theme-neobrutalism .dimension-tab:hover,
        .theme-neobrutalism .dimension-tab.active {
            background: #ff0080;
            color: #fff;
            transform: translate(-1px, -1px);
            box-shadow: 4px 4px 0 #000;
        }

        .theme-terminal {
            font-family: 'Courier New', monospace;
            background: #000;
        }

        .theme-terminal .container {
            background: #000;
            color: #00ff00;
        }

        .theme-terminal .header {
            background: #000;
            border-bottom: 1px solid #00ff00;
        }

        .theme-terminal .card {
            background: #111;
            border: 1px solid #00ff00;
            color: #00ff00;
        }

        .theme-terminal .card:hover {
            background: #001100;
            box-shadow: 0 0 10px rgba(0,255,0,0.3);
        }

        .theme-terminal .mood-section {
            background: #001100;
        }

        .theme-terminal .mood-btn {
            background: #000;
            border: 1px solid #00ff00;
            color: #00ff00;
        }

        .theme-terminal .mood-btn:hover,
        .theme-terminal .mood-btn.active {
            background: #00ff00;
            color: #000;
        }

        .theme-terminal .dimension-tab {
            background: #000;
            border: 1px solid #00ff00;
            color: #00ff00;
        }

        .theme-terminal .dimension-tab:hover,
        .theme-terminal .dimension-tab.active {
            background: #00ff00;
            color: #000;
        }

        .theme-memphis .container {
            background: linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #00d2d3);
            background-size: 400% 400%;
            animation: memphisGradient 15s ease infinite;
        }

        .theme-memphis .header {
            background: linear-gradient(45deg, #ff6b9d, #c44569);
            transform: rotate(-1deg);
            border: 3px solid #000;
        }

        .theme-memphis .card {
            background: #fff;
            border: 3px solid #000;
            transform: rotate(-1deg);
        }

        .theme-memphis .card:nth-child(even) {
            transform: rotate(1deg);
        }

        .theme-memphis .card:hover {
            transform: rotate(0deg) scale(1.02);
        }

        .theme-memphis .mood-section {
            background: linear-gradient(45deg, #f8b500, #00d2d3);
            transform: rotate(1deg);
        }

        .theme-memphis .mood-btn {
            background: #fff;
            border: 2px solid #000;
            transform: rotate(-2deg);
            font-weight: bold;
        }

        .theme-memphis .mood-btn:nth-child(even) {
            transform: rotate(2deg);
        }

        .theme-memphis .mood-btn:hover,
        .theme-memphis .mood-btn.active {
            background: #ff6b9d;
            color: #fff;
            transform: rotate(0deg) scale(1.1);
        }

        .theme-memphis .dimension-tab {
            background: #fff;
            border: 2px solid #000;
            font-weight: bold;
        }

        .theme-memphis .dimension-tab.active {
            background: #c44569;
            color: #fff;
        }

        @keyframes memphisGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .theme-liquid-glass .container {
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
            backdrop-filter: blur(10px);
        }

        .theme-liquid-glass .header {
            background: rgba(102, 126, 234, 0.3);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .theme-liquid-glass .card {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .theme-liquid-glass .card:hover {
            background: rgba(255,255,255,0.3);
            backdrop-filter: blur(15px);
        }

        .theme-liquid-glass .mood-section {
            background: rgba(248, 249, 250, 0.3);
            backdrop-filter: blur(10px);
        }

        .theme-liquid-glass .mood-btn {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .theme-liquid-glass .mood-btn:hover,
        .theme-liquid-glass .mood-btn.active {
            background: rgba(102, 126, 234, 0.4);
            color: #fff;
            backdrop-filter: blur(12px);
        }

        .theme-liquid-glass .dimension-tab {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .theme-liquid-glass .dimension-tab:hover,
        .theme-liquid-glass .dimension-tab.active {
            background: rgba(102, 126, 234, 0.4);
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img id="headerEmojiImg" class="header-emoji-img" src="http://biaoqing.gtimg.com/back/yuntu/o/7c859220acc1c85fc8f1449ffbd9efee.jpg" alt="表情包">
            <div class="theme-selector">
                <select id="themeSelector">
                    <option value="default">默认</option>
                    <option value="pixel">像素风</option>
                    <option value="neobrutalism">新粗野主义</option>
                    <option value="terminal">终端风</option>
                    <option value="memphis">孟菲斯</option>
                    <option value="liquid-glass">液态玻璃</option>
                </select>
            </div>
            <div class="header-content">
                <h1>人类丰容</h1>
                <p>生活灵感库 · 打破无聊日常</p>
                <div class="header-emoji" id="headerEmoji">🌟</div>
            </div>
        </div>

        <div class="mood-section">
            <div class="mood-title">今天的心情如何？</div>
            <div class="mood-buttons">
                <button class="mood-btn" data-mood="energetic">精力充沛</button>
                <button class="mood-btn" data-mood="calm">平静放松</button>
                <button class="mood-btn" data-mood="creative">创意满满</button>
                <button class="mood-btn" data-mood="social">社交活跃</button>
            </div>
        </div>

        <div class="dimensions">
            <div class="dimension-title">选择丰容维度</div>
            <div class="dimension-tabs">
                <button class="dimension-tab active" data-dimension="all">全部</button>
                <button class="dimension-tab" data-dimension="environment">环境</button>
                <button class="dimension-tab" data-dimension="social">社交</button>
                <button class="dimension-tab" data-dimension="cognitive">认知</button>
                <button class="dimension-tab" data-dimension="selfcare">自我关怀</button>
                <button class="dimension-tab" data-dimension="lifestyle">生活方式</button>
            </div>

            <div class="cards-container" id="cardsContainer">
                <!-- 卡片将通过JavaScript动态生成 -->
            </div>
        </div>

        <div class="mystery-box" id="mysteryBox">
            <div class="mystery-title">🎲 神秘盒子</div>
            <div class="mystery-subtitle">点击获取随机灵感</div>
        </div>
    </div>

    <div class="modal" id="cardModal">
        <div class="modal-content">
            <button class="modal-close" id="modalClose">&times;</button>
            <div class="modal-emoji" id="modalEmoji"></div>
            <div class="modal-title" id="modalTitle"></div>
            <div class="modal-description" id="modalDescription"></div>
            <div class="modal-tags" id="modalTags"></div>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
