<template>
    <b-container>
        <b-row>
            <div class="d-none d-xl-block bd-toc pt-4 col-xl-3">
                <nav aria-label="Page table of contents">
                    <b-nav vertical v-b-scrollspy.70 class="m-toc section-nav">
                        <b-nav-item href="#item-1" @click="scrollIntoView">1. 治理架构与机制</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-1-1" @click="scrollIntoView">1.1. 链上治理</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-1-2" @click="scrollIntoView">1.2. 链下治理</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-2" @click="scrollIntoView">2. 链上治理—GXChain理事会和公信节点</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-2-1" @click="scrollIntoView">2.1. GXChain理事会和公信节点
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-2" @click="scrollIntoView">2.2. 公信节点竞选规则</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-3" @click="scrollIntoView">2.3. 节点收益</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-2-4" @click="scrollIntoView">2.4. 公信节点投票产生方式
                            </b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-3" @click="scrollIntoView">3. 链下治理—GXChain基金会</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-3-1" @click="scrollIntoView">3.1. GXChain基金会的设立
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-2" @click="scrollIntoView">3.2. GXChain基金会的组织架构
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-3" @click="scrollIntoView">3.3. 决策委员会</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-4" @click="scrollIntoView">3.4. 顾问委员会</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-5" @click="scrollIntoView">3.5. 执行委员会</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-3-6" @click="scrollIntoView">3.6. 下属专门委员会</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-4" @click="scrollIntoView">4. GXChain团队</b-nav-item>
                        <b-nav-item href="#item-5" @click="scrollIntoView">5. GXChain基金会的经济</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-5-1" @click="scrollIntoView">5.1. 资金使用的限制条款
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-2" @click="scrollIntoView">5.2. 财务管理</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-3" @click="scrollIntoView">5.3. 钱包管理</b-nav-item>
                            <b-nav-item class="ml-3" href="#item-5-4" @click="scrollIntoView">5.4. 披露事项</b-nav-item>
                        </b-nav>
                        <b-nav-item href="#item-6" @click="scrollIntoView">6. GXChain基金会的风控机制</b-nav-item>
                        <b-nav class="flex-column">
                            <b-nav-item class="ml-3" href="#item-6-1" @click="scrollIntoView">6.1. 重大事项的风险评估与决策机制
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-6-2" @click="scrollIntoView">6.2. 定期检查、评估与舆情监督、汇报机制
                            </b-nav-item>
                            <b-nav-item class="ml-3" href="#item-6-3" @click="scrollIntoView">6.3. 突发事项的紧急评估与决策机制
                            </b-nav-item>
                        </b-nav>
                    </b-nav>
                </nav>
            </div>
            <b-col cols="9" class="scrollspy-wrap">
                <div class="container" ref="content" id="scrollspy-nested" style="position:relative">
                    <!--item-1-->
                    <div>
                        <h4 id="item-1">1. 治理架构与机制</h4>
                        <p class="text-indent">
                            “治理”是公链的核心命题，一个去中心化治理的公链才会有最长久的生命力。GXChain通过链上与链下治理的结合将人与代码同时引入到公链的复杂治理体系中去，从而在实现治理的去中心化的同时保证治理的有效性。每一位GXChain资产持有者都有参与去中心化治理的权利。公链生态中的运营和发展方向，都会由全体GXC持有者以协商投票的方式来决定。</p>
                        <p class="text-indent">
                            GXChain的链上治理结构由理事会(Committee)和公信节点(TrustNode)构成。链上理事会由11名成员组成，可以提议修改GXChain的动态全局参数。公信节点由21名节点成员组成，负责GXChain网络的交易记账、交易验证、区块打包和确认等工作。</p>
                        <div class="govern-con">
                            <h5 id="item-1-1">1.1. 链上治理</h5>
                            <ul>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/1.png" alt="">
                                        <p>理事会 Committee</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ 相当于链上的董事会，负责 GXChain 区块、交易、手续费等全局参数的 提案发起和投票</p>
                                        <p>○ 由 11 名成员组成，每名成员必须是公信节点之一</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/2.png" alt="">
                                        <p>公信节点 TrustNode</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ 矿工，负责 GXChain 的交易记账、交易验证、区块打包和确认等工作</p>
                                        <p>○ 至少由 21 名节点成员组成，前 11 个公信节点自动成为理事会成员</p>
                                    </div>
                                </li>
                            </ul>
                            <h5 id="item-1-2">1.2. 链下治理</h5>
                            <ul>
                                <li>
                                    <div class="l-item">
                                        <img src="~static/foundation/3.png" alt="">
                                        <p>GXChain 基金会</p>
                                    </div>
                                    <div class="r-item">
                                        <p>○ 注册于新加坡的非盈利性组织</p>
                                        <p>○ 由决策委员会，顾问委员会、执行委员会、生态建设委员会等 7 个部门组成</p>
                                        <p>○ 负责 GXChain 的重大决策、技术开发、全球推广、财务管理和会议组织</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--item-2-->
                    <div>
                        <h4 id="item-2">2. 链上治理—GXChain理事会和公信节点</h4>
                        <p class="text-indent">
                             GXChain的链上治理是通过GXChain理事会和公信节点为载体去实现的。GXC持币人可通过公信节点去方便、快捷地行使GXChain的治理权。GXChain的生态内有21个公信节点，为GXChain提供网络、储和计算等基础设施。GXChain鼓励每一个公信节点构建自身的社区，使得每一个公信节点的社区都能在相互竞争中共同发展，壮大GXChain生态。公信节点按得票数的前11名当选为GXChain理事会成员，它是GXChain社区的核心链上治理组织。</p>
                        <div>
                            <h5 id="item-2-1">2.1.GXChain理事会和公信节点</h5>
                            <p>在GXChain的治理生态中有如下三个角色：</p>
                            <dl>
                                <dd>1) 持币者：持有任意数量GXC的个体或机构。</dd>
                                <dd>2) 公信节点: 由全体GXC持币者投票选举出的个体或机构，每1小时统计一次投票，共有21个公信节点。21个节点由投票前20名节点以及一个随机节点构成。
                                    公信节点负责GXChain网络的交易验证、交易记账、区块打包和确认等工作，成功打包区块将获得对应的奖励。公信节点接受GXChain社区的监督。
                                </dd>
                                <dd>3) GXChain理事会: 公信节点按得票数的前11名当选为GXChain理事会成员。</dd>
                                <dd>GXChain理事会是GXChain社区的核心链上治理组织，主要职责是设定合理的公链全局参数，以此促进GXChain长期的健康发展。其中包括：</dd>
                                <dd class="text-indent">
                                    <p>1) 修改区块链的动态参数，比如区块大小、区块间隔等；</p>
                                    <p>2) 公信节点出块奖励、公信节点数量和活跃理事会成员数量等；</p>
                                    <p>3) 转账、发行资产及各类交易手续费；</p>
                                    <p>4) 智能合约的创建和调用费率等。</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-2-2">2.2. 公信节点竞选规则</h5>
                            <p class="text-indent">
                                每一位GXC持币者都可成为公信节点的竞选者。竞选者需要向系统抵押1万GXC(具体金额由理事会投票决定)，退出竞选时可在30天后(系统动态参数，可由理事会投票调整)取回。若节点作恶，其抵押的GXC可由理事会投票处理。为了保障节点竞选的高效进行，
                                GXChain针对公信节点候选人制定了一系列的标准和规则。由GXChain基金会的生态建设委员会(GXChain-ECO)根据标准和规则对候选节点进行审核。公信节点候选人必须符合以下基本条件：</p>
                            <div class="text-indent">
                                <p>1) 具有合法设立的组织主体，且拥有官网及社交账号；</p>
                                <p>2) 具有可供社区成员测试的节点；</p>
                                <p>3) 拥有可运行节点的服务器和节点运维技术；</p>
                                <p>4）创建公信节点，需要抵押一定数量的GXC，z若取回抵押的GXC，则视为退出竞;</p>
                                <p>5) 已制定未来三年的预算支持，技术方案，硬件扩容以及社区支持计划；</p>
                                <p>6) 拥有一定规模的社区用户。</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-2-3">2.3. 节点收益</h5>
                            <p class="text-indent">
                                公信节点的收益主要来自出块奖励，由理事会投票决定出块奖励金额。在每一次区块打包完成之后，公信节点将获得相应的出块奖励。出块奖励池子由转账手续费以及基金会捐赠节点奖励两部分构成。为激励公信节点在GXChain生态中做出的积极贡献，GXChain基金会将捐赠400万枚GXC注入系统资金池作为节点出块奖励，奖励分8年发放，每年释放50万枚。</p>
                        </div>
                        <div>
                            <h5 id="item-2-4">2.4. 公信节点投票产生方式</h5>
                            <p class="text-indent">
                                每一个GXC视为一票，可为多个候选节点投票。参与公信节点投票的GXC将被质押在自己的钱包，如果资产转出，则视为撤票。累计票数排名前20名节点自动当选为公信节点，第21个节点从剩余的备选节点中随机产生。
                                投票途径主要有3种：</p>
                            <div class="text-indent">
                                <p>1) 布洛克城投票</p>
                                <p>在布洛克城钱包中的GXC，可通过布洛克城的投票通道进行公信节点的投票。</p>
                                <p>2) 手机钱包和PC钱包投票</p>
                                <p>在GXChain手机钱包和PC钱包中的GXC可进行公信节点的投票。 </p>
                                <p>3) 交易所投票</p>
                                <p>如果用户的GXC在交易所钱包里，且该交易所支持GXChain的公信节点投票，便可以采用此方式进行投票。</p>
                            </div>
                        </div>
                    </div>
                    <!--item-3-->
                    <div>
                        <h4 id="item-3">3. 链下治理—GXChain基金会</h4>
                        <div>
                            <h5 id="item-3-1">3.1. GXChain基金会的设立</h5>
                            <p class="text-indent">GXChain基金会于2017年11月在新加坡正式成立，全称为GXChain foundation
                                LTD.，旨在通过科学、合理、有效的治理机制推动并维系基金会及GXChain生态的建设和健康发展，为GXC持币者提供合适的保护和平等权利，构建GXC持币者、社区、节点、DApp
                                开发者等不同角色之间的高效沟通渠道。</p>
                            <p class="text-indent">
                                GXChain基金会每年将向社区披露GXChain的开发情况、运营情况、GXC的使用情况等，并将引入第三方审计机构，监督项目的财务运作，审计报告将在年度信息披露中公告。</p>
                        </div>
                        <div>
                            <h5 id="item-3-2">3.2. GXChain基金会的组织架构</h5>
                            <div class="text-center" style="margin:4rem 0">
                                <img src="~static/foundation/4.png" alt="" class="decision-img">
                                <p>图 3.1 GXChain 基金会组织架构</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-3-3">3.3. 决策委员会</h5>
                            <dl>
                                <dt>3.3.1.简介</dt>
                                <dd>决策委员会是GXChain基金会的决策机构。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.2.人员组成</dt>
                                <dd>决策委员会由11名成员组成，包含主要发起人、开发者代表、投资者代表及社区代表，设主席、副主席、执行总裁各一人，从决策委员会成员中选举产生，其他代表名额不固定。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.3.人员介绍</dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>主席</td>
                                    <td>黄敏强，GXChain创始人</td>
                                </tr>
                                <tr>
                                    <td>副主席</td>
                                    <td>涂国君，GXChain联合创始人</td>
                                </tr>
                                <tr>
                                    <td>执行总裁</td>
                                    <td>黄敏强，GXChain创始人</td>
                                </tr>
                                <tr>
                                    <td rowspan="4">其他成员</td>
                                    <td>王成，GXChain首席技术官</td>
                                </tr>
                                <tr>
                                    <td>蓝昊翔，GXChain区块链研发总监</td>
                                </tr>
                                <tr>
                                    <td>朱礼廷，GXChain区块链架构师</td>
                                </tr>
                                <tr>
                                    <td>许潇鹏，GXChain运营总监</td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.3.4.议事规则</dt>
                                <dd>
                                    决策委员会至少每年召开一次会议，由决策委员会主席负责召集并主持，于会议召开30日前通知全体成员，决策委员会会议需由1/2以上的成员出席方可举行。决策委员会会议中，一般事项的决议须经出席成员2/3以上表决通过，特殊事项还须经决策委员会主席投赞成票方为有效。任何需决策委员会决议的事项，如决策委员会成员以书面形式一致表示同意的，可以不召开决策委员会会议，直接作出决定，并由全体成员在决定文件上签名。
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.3.5.主要职权</dt>
                                <dd> 决策委员会主要行使下列职权：</dd>
                                <dd>（1）制定、修改基金会治理机制；</dd>
                                <dd>（2）选举、罢免主席或副主席；</dd>
                                <dd>（3）根据主席的提名选举执行总裁、副总裁和其他执行委员会成员；</dd>
                                <dd>（4）决定基金会的经营计划和投资方案；</dd>
                                <dd>（5）年度收支预算、决算及资金分配方案审定；</dd>
                                <dd>（6）通过授予荣誉职务（包括聘请名誉主席和顾问），增减顾问委员会成员；</dd>
                                <dd>（7）决定设立办事机构、分支机构、代表机构；</dd>
                                <dd>（8）听取、审议主席所做的工作报告，检查执行总裁的工作；</dd>
                                <dd>（9）决定基金会的分立、合并或终止；</dd>
                                <dd>（10 决定其他重大事项。</dd>
                                <dd>其中，有关第(1)、(4)、(5)、(9)项的决议属于特殊事项。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.6.任职资格</dt>
                                <dd>决策委员会成员需具备下列条件：</dd>
                                <dd>（1）有加入基金会的较强意愿，认同基金会的宗旨；</dd>
                                <dd>（2）在基金会的业务领域或社区内，具有一定影响力；</dd>
                                <dd>（3）对基金会的发展壮大，有所帮助或有所贡献者；</dd>
                                <dd>（4）无任何违法犯罪记录。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.7.人员的产生和罢免</dt>
                                <dd>（1）第一届决策委员会成员由主要发起人、开发者代表、投资者代表分别提名并共同协商确定；。</dd>
                                <dd>
                                    （2）决策委员会换届改选时，由决策委员会提前60日发布公告公布成员资格条件及改选规则等事项，面向全体GXC持有人征集候选人，最终由GXC持有人进行投票，选举产生新一届决策委员会成员；。
                                </dd>
                                <dd>（3）决策委员会成员需在任职期间接受授信调查，并公开薪酬情况。。</dd>
                                <dd>（4）任何成员因违反基金会制度、损害基金会声誉或给基金会事业造成损失等，经决策委员会审议后终止任职；。</dd>
                                <dd>
                                    （5）任何成员因违法、违纪受到处理，职务即时终止；任何成员因涉嫌犯罪被起诉或接受调查，决策委员会合理地认为该成员继续担任职务可能影响基金会声誉或形象的，经决策委员会审议后终止任职；。
                                </dd>
                                <dd>（6）任何成员自动请辞，死亡或因疾病、意外事故等丧失工作能力的，经决策委员会审议后终止任职。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.8.任期</dt>
                                <dd>决策委员会成员每届任期为2年，任期届满，连选可以连任。</dd>
                            </dl>
                            <dl>
                                <dt>3.3.9.主席、副主席主要职权</dt>
                                <dd>决策委员会主席主要行使下列职权：</dd>
                                <dd>（1）召集和主持决策委员会会议并组织实施；</dd>
                                <dd>（2）提议召开临时决策委员会会议；</dd>
                                <dd>（3）代表基金会签署重要文件，检查决策委员会决议的落实情况；</dd>
                                <dd>（4）对重大突发事件进行紧急决策；</dd>
                                <dd>（5）提名执行总裁、副总裁和其他执行委员会成员的候选人，各项职务应至少提名2位候选人供决策委员会选定。</dd>
                                <dd>副主席在主席领导下开展工作，经主席书面授权可代主席行使相关职权。</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-4">3.4.顾问委员会</h5>
                            <dl>
                                <dt>3.4.1.简介</dt>
                                <dd>
                                    顾问委员会是GXChain基金会的专家顾问团，由决策委员会挑选业务相关专业领域内较具有影响力的人员组成，包括但不限于技术专家、资深投资人、资深律师等，为基金会运营管理事务提供咨询与指导
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.4.2.人员组成</dt>
                                <dd>不超过7名，由决策委员会选定。</dd>
                            </dl>
                            <dl>
                                <dt>3.4.3.人员介绍</dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>韩锋，华为中央研究院区块链顾问，亚洲区块链DACA协会秘书长，亦来云基金会联合创始人</td>
                                </tr>
                                <tr>
                                    <td>李笑来，INBlockchain创始人</td>
                                </tr>
                                <tr>
                                    <td>沈波，分布式资本合伙人</td>
                                </tr>
                                <tr>
                                    <td>元道，世纪互联数据中心的创始人、董事长，中关村区块链联盟理事长</td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.4.4.主要职权</dt>
                                <dd>顾问委员会主要行使下列职权：</dd>
                                <dd>（1）为基金会运营管理事务提供咨询与指导。</dd>
                                <dd>（2）受决策委员会邀请可列席决策委员会会议，但不具备投票权。</dd>
                            </dl>
                            <dl>
                                <dt>3.4.5.任职资格</dt>
                                <dd>顾问委员会人员需具备下列条件：</dd>
                                <dd>（1）在基金会的业务相关专业领域内，具有一定影响力；</dd>
                                <dd>（2）无任何违法犯罪记录。</dd>
                            </dl>
                            <dl>
                                <dt>3.4.6.人员的产生和罢免</dt>
                                <dd>（1）由决策委员会挑选并授予荣誉职务，包括聘请名誉主席、顾问等。</dd>
                                <dd>（2）因违反基金会制度、损害基金会声誉或给基金会事业造成损失等，经决策委员会审议后终止任职。</dd>
                                <dd>（3）因违法、违纪受到处理，职务即时终止；因涉嫌犯罪被起诉或接受调查，决策委员会合理地认为该人员继续担任职务可能影响基金会声誉或形象的，经决策委员会审议后终止任职；
                                </dd>
                                <dd>（4）自动请辞，死亡或因疾病、意外事故等丧失工作能力的，经决策委员会审议后终止任职。</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-5">3.5. 执行委员会</h5>
                            <dl>
                                <dt>3.5.1.简介</dt>
                                <dd>
                                    执行委员会是GXChain基金会的执行机构，负责基金会日常运营管理事务的具体执行，设执行总裁一人，其他执行委员会成员在执行总裁领导下开展工作，指导并管理下属专门委员会工作。
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.5.2.人员组成</dt>
                                <dd>执行总裁、副总裁、秘书及各专门委员会负责人</dd>
                            </dl>
                            <dl>
                                <dt>3.5.3.人员介绍</dt>
                            </dl>
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <td>执行总裁</td>
                                    <td>黄敏强，GXChain创始人</td>
                                </tr>
                                <tr>
                                    <td>副总裁</td>
                                    <td>涂国君，GXChain联合创始人</td>
                                </tr>
                                <tr>
                                    <td>执行总裁</td>
                                    <td>黄敏强，GXChain创始人</td>
                                </tr>
                                <tr>
                                    <td>秘书</td>
                                    <td>许潇鹏，GXChain运营总监</td>
                                </tr>
                                </tbody>
                            </table>
                            <dl>
                                <dt>3.5.4.主要职权</dt>
                                <dd>执行委员会主要行使下列职权：</dd>
                                <dd>（1）执行决策委员会的各项决议；</dd>
                                <dd>（2）指导下属专门委员会开展工作；</dd>
                                <dd>（3）决定下属专门委员会人员的聘用与解聘，包括决定其报酬事项；</dd>
                                <dd>应对基金会紧急事件，拟定应对方案供决策委员会主席决策。</dd>
                            </dl>
                            <dl>
                                <dt>3.5.5.人员的产生和罢免</dt>
                                <dd>（1）由决策委员会主席提名，经决策委员会审议后选定；</dd>
                                <dd>（2）因违反基金会制度、损害基金会声誉或给基金会事业造成损失等，经决策委员会审议后终止任职；</dd>
                                <dd>（3）因违法、违纪受到处理，职务即时终止；因涉嫌犯罪被起诉或接受调查，决策委员会合理地认为该人员继续担任职务可能影响基金会声誉或形象的，经决策委员会审议后终止任职；
                                </dd>
                                <dd>（4）自动请辞，死亡或因疾病、意外事故等丧失工作能力的，经决策委员会审议后终止任职。</dd>
                            </dl>
                            <dl>
                                <dt>3.5.6.任期</dt>
                                <dd>每届任期为2年，任期届满，连选可以连任。</dd>
                            </dl>
                            <dl>
                                <dt>3.5.7.执行总裁主要职权</dt>
                                <dd>执行总裁主要行使下列职权：</dd>
                                <dd>（1）主持开展基金会日常工作，组织实施年度运营计划，并向决策委员会汇报工作情况;</dd>
                                <dd>（2）拟订基金会的内部管理规章制度，报决策委员会审批；</dd>
                                <dd>协调各下属专门委员会、分支机构开展工作。</dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-3-6">3.6.下属专门委员会</h5>
                            <dl>
                                <dt>3.6.1.生态建设委员会</dt>
                                <dd class="text-indent">
                                    生态建设委员会负责GXChain生态建设相关事宜，包括对GXChain上开发者项目的投资、孵化，为构建GXChain生态筛选合作伙伴，进行尽职调查并负责后续合作对接工作。
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.6.2.代码评审委员会</dt>
                                <dd class="text-indent">
                                    代码评审委员会负责GXChain底层技术构建、API服务开发、开发者代码评审、代码合并与Github发布等工作。同时，代码评审委员会人员通过定期分享会、不定期交流会等形式保持技术团队紧跟行业趋势，积极研究最新区块链技术。 
                                </dd>
                                <dd>Github地址 <a href="https://www.github.com/gxchain" target="_blank">https://www.github.com/gxchain</a>
                                </dd>
                            </dl>
                            <dl>
                                <dt>3.6.3.市场公关委员会</dt>
                                <dd class="text-indent">市场公关委员会负责基金会形象的建立与维护及社区的运营与推广，以及危机公关等工作。</dd>
                            </dl>
                            <dl>
                                <dt>3.6.4.综合职能委员会</dt>
                                <dd class="text-indent">综合职能委员会负责基金会日常资金使用的审核与管理、基金会内部人事管理、行政事务管理及法律事务管理等事项。</dd>
                            </dl>
                        </div>
                    </div>
                    <!--item-4-->
                    <div>
                        <h4 id="item-4">4. GXChain团队</h4>
                        <p class="text-indent">
                            GXChain团队具有多年的区块链技术、互联网金融和社区运营等方面的专业背景和经验，主要以技术为导向，形成了由黄敏强带领的、共有40多名核心开发人员的GXChain开发团队。至今已完成GXChain主网、智能合约2.0的开发。GXChain主要团队成员及经历如下：</p>
                        <table class="table table-bordered table-hover">
                            <thead>
                            <tr class="text-center">
                                <th scope="col" width="20%">姓名</th>
                                <th scope="col">简要经历</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center">黄敏强</td>
                                <td>前汉鼎宇佑(股票代码300300)
                                    CTO、前汉鼎宇佑⾦融服务公司总经理、前浙⼤⽹新互联⽹副总经理。在数据交换、互联网金融和区块链领域有超过10年的从业和研究经验。从2012年开始研究数字货币和区块链，参与并发起多个区块链项目，对区块链产品设计和数字货币经济模型设计有深度研究和实践，同时也是超级马拉松、越野跑、山地自行车等耐力运动爱好者。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">涂国君</td>
                                <td>
                                    先后在创智软件、国讯国际等上市IT公司担任⾼管职务，创建过多家科技公司，并获得IDG等机构的投资，拥有多年的软件开发、互联⽹、⽀付、信息安全等⾏业的从业经验，区块链深度研究者。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">王成</td>
                                <td>
                                    国内顶尖数据技术专家，前51信⽤卡架构师，深度区块链技术爱好者，实践者。先后任职Vobile，51信用卡，大树金融担任核心角色。在数据采集，衍生数据挖掘，数据建模，系统架构，密码学，网络安全有丰富的经验。精通从底层系统到上层业务系统的全栈领域技术，6年以上技术团队管理经验，曾多次领导团队实现从0到1的突破。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">许潇鹏</td>
                                <td>6年市场营销经验，历任浙江广电集团、思美传媒、网易市场负责人，负责过大量产品和各种行业的品牌传播和市场活动，对互联网营销、品牌策略经验丰富。</td>
                            </tr>
                            <tr>
                                <td class="text-center">郭爽</td>
                                <td>在分布式账本技术、区块链、密码货币以及50多个项目的尽职调查领域有两年的经验；在市场评估、专利评估、业务发展和CRM方面有两年的经验。</td>
                            </tr>
                            <tr>
                                <td class="text-center">蓝昊翔</td>
                                <td>全栈开发工程师,
                                    精通区块链技术，Graphene社区活跃成员和代码贡献者，5年金融领域从业经验，13年接触区块链，并持续从事区块链技术的研究和应用，曾就职于美国道富、51信用卡、大树金融，在密码学、数据库、服务端和移动端等多个领域都有丰富的实践经验。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">张俊杰</td>
                                <td>
                                    全栈⼯程师，擅⻓UI设计，前端开发，后端开发；精通node.js，python，负责过某外企、国内知名互联⽹⾦融公司前端开发架构⼯作，参与过基于区块链应⽤的开发⼯作。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">朱礼廷</td>
                                <td>
                                    数学学⼠和计算机硕⼠，6年软件开发经验，Graphene社区代码贡献者，熟悉区块链底层技术开发，拥有丰富的P2P⽹络开发经验，精通C/C++、Python、Shell，曾就职于Vobile⾩博通担任资深开发⼯程师。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">徐磊</td>
                                <td>
                                    全栈工程师，熟悉各种前端技术，具备跨终端的前端开发能力和拥有数据可视化产品设计开发经验，精通PHP、Node、Python，曾任浙报集团、房产销冠核心前端开发工程师。
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">尧俊</td>
                                <td>资深java工程师，前大树网络核心开发工程师，拥有丰富的互联网开发经验，对于大数据采集、分析、挖掘有相当丰富的经验。</td>
                            </tr>
                            <tr>
                                <td class="text-center">吴立宇</td>
                                <td>
                                    原网易高级产品经理，曾先后在同花顺、微贷网等公司负责产品设计工作。深耕互联网金融行业，在C端和B端产品上均有丰富的产品经验。从15年开始就已成为区块链技术的虔诚信仰者，并且坚信分布式去中心化的存储技术将颠覆诸多既定领域的业务形态。知行合一，目前已主导公信宝一系列区块链产品的上线落地工作，正逐步让区块链技术的“理想照进现实”。
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--item-5-->
                    <div class="fourth-container">
                        <h4 id="item-5">5. GXChain基金会的经济</h4>
                        <div>
                            <div class="text-center" style="margin:4rem 0">
                                <img src="~static/foundation/5.png" alt="" class="decision-img">
                                <p>图 5.1 GXChain 基金会组织架构</p>
                            </div>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                            <tr class="text-center">
                                <th scope="col" width="33.3%" colspan="2">比例</th>
                                <th scope="col" width="33.3%">分配方案</th>
                                <th scope="col" width="33.3%">详细说明</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="2">10%</td>
                                <td>早期投资人</td>
                                <td>用于发放给最早期的投资人</td>
                            </tr>
                            <tr>
                                <td colspan="2">24.51%</td>
                                <td>首次公开发行</td>
                                <td>用于发放首次公开发行的投资人</td>
                            </tr>
                            <tr>
                                <td colspan="2">5%</td>
                                <td>布洛克城宝池</td>
                                <td>作为布洛克城挖宝奖励投放至布洛克城宝池，激励用户进行可信数据上链</td>
                            </tr>
                            <tr>
                                <td colspan="2">9.49%</td>
                                <td>开发者扶持基金</td>
                                <td>作为开发者扶持基金， 用于扶持基于GXChain开发的DApps</td>
                            </tr>
                            <tr>
                                <td rowspan="5">51%</td>
                                <td>21%</td>
                                <td class="vh-center">创始团队</td>
                                <td>发放GXC以回报创始团队在 GXChain筹备期、开发初期投入的 大量的人力、物力等资源，以及为 GXChain的技术和运营等各个方面 所做出的重大贡献，同时激励其
                                    之后在GXChain发展过程中继续发 力
                                </td>
                            </tr>
                            <tr>
                                <td>10%</td>
                                <td>GXChain公链生态建设</td>
                                <td>用于公链生态建设、公链开发与开 发者社区培育，用于支付合作费用 、扶持开发者项目、举办技术竞赛 等，推动GXChain技术的应用与生 态的建设，展现并提升商业价值
                                </td>
                            </tr>
                            <tr>

                                <td>6%</td>
                                <td>市场公关</td>
                                <td>用于GXChain全球性的市场宣传、 品牌营销及社区运营等工作</td>
                            </tr>
                            <tr>
                                <td>4%</td>
                                <td>公信节点</td>
                                <td>公信节点出块奖励，共21个节点</td>
                            </tr>
                            <tr>
                                <td>10%</td>
                                <td>日常经营</td>
                                <td>作为GXChain基金会的日常经营资 金，用于支付员工工资、行政采购 费用、外聘会计师服务费用等日常 经营性开支</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <h5 id="item-5-1">5.1. 资金使用的限制条款</h5>
                            <p>GXChain基金会将严格遵循上述分配机制进行资金的使用，并承诺保持资金分配与使用情况的公开透明，定期向GXC持有人进行信息披露。</p>
                            <p> GXChain基金会资金的使用原则:</p>
                            <div class="text-indent">
                                <p>1) 超过2万美元的支出，需要经过相应专门委员会负责人审批; </p>
                                <p>2) 超过5万美元的支出，需要经过执行委员会审批；</p>
                                <p>3) 超过20万美元的支出，需要经过决策委员会审批。</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-5-2">5.2.财务管理</h5>
                            <p class="text-indent">由综合职能专门委员会负责日常财务管理，包括人员薪酬、房屋租赁、日常费用等。 </p>
                            <p class="text-indent">
                                由执行委员会授权人员负责管理GXChain基金会的数字资产。采取多重签名确保资产的安全性和准确性。如果有法币收入，所收取的法币，及时转为数字货币，并存入数字钱包（非个人账户），且每日做交易记录记账。</p>
                            <p class="text-indent">每季度由综合职能委员会对上一季度的财务执行情况进行总结，制作书面财务报告并向执行委员会汇报。</p>
                        </div>
                        <div>
                            <h5 id="item-5-3">5.3.钱包管理</h5>
                            <p class="text-indent">
                                GXChain基金会通过私募、捐赠、活动收费以及交易手续费等筹集到的数字资产若为大额则进行冷钱包存储，若为小额则采用多重签名的方式。基于独立性原则，GXChain基金会的钱包采取
                                2/3多重签名，私钥由决策委员会成员等多人持有。若增加或减少签名，须经过执行委员会审批。</p>
                        </div>
                        <div>
                            <h5 id="item-5-4">5.4.披露事项</h5>
                            <p class="text-indent">
                                GXChain基金会每年将向社区披露GXChain的开发情况、运营情况、GXC的使用情况等，并将引入第三方审计机构，监督项目的财务运作，审计报告将在年度信息披露中公告。</p>
                        </div>
                    </div>
                    <!--item-6-->
                    <div>
                        <h4 id="item-6">6. GXChain基金会的风控机制</h4>
                        <p class="text-indent">
                            GXChain基金会通过设置多角度切入、多部门联动的科学机制来预防、应对各类风险事项，以保证GXChain的安全、可持续发展，维护GXC持有人的利益。</p>
                        <div>
                            <h5 id="item-6-1">6.1.重大事项的风险评估与决策机制</h5>
                            <p> 任何重大事项的决策均需经过充分的风险评估后方可作出，基本流程如下：</p>
                            <div class="text-indent">
                                <p>
                                    1) 执行委员会成员领导相应下属专门委员会针对具体事项从技术、市场、政策等风险因素着手进行评估，就可能产生的风险设定风险界定标准与规则、制定处置预案，并形成书面报告。针对重大合作项目、投资项目等事项，相关人员应对合作方、目标公司或团队进行充分尽职调查后再行评估。</p>
                                <p>
                                    2) 执行总裁领导执行委员会对具体事项的书面报告进行综合分析、论证后，最终拟定书面风险评估报告提交决策委员会。必要时，执行总裁应引入顾问委员会，参考专家、顾问的意见最终确定风险评估报告。</p>
                                <p>3) 决策委员会应将风险评估结果报告作为决策的重要依据，按照相应议事规则作出决议。</p>
                            </div>
                        </div>
                        <div>
                            <h5 id="item-6-2">6.2.定期检查、评估与舆情监督、汇报机制</h5>
                            <dl>
                                <dd>
                                    <p>6.2.1.执行委员会主要从技术和管理两方面着手进行定期检查与评估：</p>
                                    <p class="text-indent">
                                        1) 技术方面，包括GXChain技术研发进度、GXChain运行情况、项目应用实施等，检查技术研发进度与质量，全面排查安全漏洞，防范技术安全风险；</p>
                                    <p class="text-indent">
                                        2) 管理方面，包括人员的配备与资格、资金使用情况、项目投资情况等，全面检查现行管理制度的执行情况，避免人员缺位、沟通不畅等管理漏洞的长期存在，及时发现并应对信息泄露、资金挪用等内部人员道德风险。</p>
                                </dd>
                                <dd>
                                    6.2.2.除定期检查与评估外，执行委员会负责指导下属专门委员会进行舆情监督并制定相应汇报机制，根据监督与汇报结果在必要时启动突发事项的紧急评估与决策机制。
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h5 id="item-6-3">6.3.突发事项的紧急评估与决策机制</h5>
                            <p>执行委员会应针对突发风险事项设定概括风险界定标准并确定决策机制，经决策委员会决议通过后，由执行总裁领导执行委员会负责遵照执行。</p>
                            <p>基本框架如下：</p>
                            <dl>
                                <dd>
                                    <p>
                                        6.3.1.如发生突发事项，应由执行总裁领导执行委员会成员进行紧急评估，按照预定标准对风险进行级别分类，分为一般风险、较高风险及高风险三类（风险界定标准与规则待完善）。</p>
                                </dd>
                                <dd>
                                    <p>6.3.2.按照前述紧急评估结果，相应基本突发事项的决策人员如下：</p>
                                    <p class="text-indent">1) 一般风险事项由执行总裁直接决策；</p>
                                    <p class="text-indent">2) 较高风险事项由执行总裁主持执行委员会成员拟定应对方案后报决策委员会主席决策；</p>
                                    <p class="text-indent">3)
                                        高风险事项应由决策委员会主席召开临时决策委员会会议，由主席领导执行总裁、执行委员会成员拟定应对方案后并在决策委员会会议上汇报以供决策。如该事项属紧急事项，则决策委员会主席可进行紧急决策，但应在决策后形成报告书面通知决策委员会成员。</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <!--item-6-->
                    <div style="margin-bottom:5rem;">
                        <h4>其他</h4>
                        <p class="text-indent">为保证GXChain基金会治理机制的有效运行，未在基金会担任专职工作的成员不得从基金会中获取报酬。</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { scrollTo, offsetTop } from '~/utils'

export default {
    data () {
        return {
            cates: []
        };
    },
    mounted () {
        if (process.client) {
            //this.getTitleCates();
        }
    },
    methods: {
        isArray (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        },
        scrollIntoView (e) {
            e.preventDefault();
            e.stopPropagation();
            const href = e.target.getAttribute('href');
            const el = href ? document.querySelector(href) : null;
            if (el) {
                // Get the document scrolling element
                const scroller =
                    document.scrollingElement ||
                    document.documentElement ||
                    document.body
                // scroll heading into view (minus offset to account for nav top height
                scrollTo(scroller, offsetTop(el) - 85, 100, () => {
                    // Set a tab index so we can focus header for a11y support
                    el.tabIndex = -1
                    // Focus the heading
                    el.focus()
                })
            }
        },
        getTitleCates () {
            let that = this;
            let idx = 0;
            let i = 0;
            document
                .querySelectorAll('h4,h5')
                .forEach(tag => {
                    tag.id = 'id' + i++;
                    i++;
                    if (tag.tagName.toUpperCase() == 'H4') {
                        that.cates.push({
                            label: tag.innerHTML,
                            href: '#' + tag.id
                        });
                        idx = that.cates.length;
                    } else if (tag.tagName.toUpperCase() == 'H5') {
                        that.cates[idx] = that.cates[idx] || [];
                        that.cates[idx].push({
                            label: tag.innerHTML,
                            href: '#' + tag.id
                        });
                    }
                });
            console.dir(that.cates);
        }
    }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/foundation.less';
</style>
