'use client';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';
import SRImage from '@/app/ui/Common/SRImage';
import TOC from '@/app/ui/Common/TOC';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';
import { resolveMediaUrl } from '@/utils/helper';

export default function JPClient() {
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <PhotoGallery album="jp" onReady={() => { }}></PhotoGallery>
      </div>

      <div className={styles.mainContainer}>
        <TOC />
        <article className={styles.content}>
          <h2 className="anchor" id="Day1">
            Day1
          </h2>
          <h3 className="anchor" id="南京禄口机场">
            南京禄口机场
          </h3>

          <section>
            <div className="mb-4 overflow-hidden">
              <SRImage
                className="right"
                photo={{
                  id: 1,
                  url: '/blog/jp/IMG_2980.JPG',
                  bgPos: 'center',
                  position: '',
                  title: '南京禄口机场',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: ''
                }}
              ></SRImage>
              计划了半年的出行计划终于如约而至了，一切都已经准备就绪。一下班便急冲冲的冲向地铁，园区站出发，目标：东京。这是个漫长的旅途，哥几个先到桌游店玩一晚上，凌晨去赶飞机。
              <span className="shy-block">此处过程不想回忆，因为我第一次打线下德扑，一晚上输了一千块。</span>
            </div>
            <p>凌晨时分，随着日出，我们拿着登机牌，值完机，迎着朝阳踏进飞往11区的登机走廊。</p>
          </section>

          <h3 className="anchor" id="在天上">
            在天上
          </h3>
          <section>
            <p>飞机上，我们讨论着三天的行程，没一会便困意涌现。</p>
            <p>
              通宵带来的困意就丢在这平流层，一切都在我们的计划之中。但是旁边三个女的实在是聒噪，硬是在那叫了三个小时，一会哈哈大笑，一会惊叫吵闹，一会又开始往脸上咔咔拍粉。硬控我三个小时，所以说计划赶不上变化呢。
            </p>
          </section>

          <h3 className="anchor" id="成田机场">
            成田机场
          </h3>
          <section>
            <SRImage
              className="left"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_2982.JPG',
                bgPos: 'center',
                position: '',
                title: '成田机场',
                title2: '',
                latlng: '',
                description: '',
                tip: 'Welcome to Japan'
              }}
            ></SRImage>
            <p>入关成功，此时已经来到了下午3点. 换完手机卡, 开始去往酒店.</p>
            <p>酒店在新宿, 我们买了机场大巴的票, 又坐了个把小时终于来到东京.</p>
          </section>

          <h3 className="anchor" id="秋叶原">
            秋叶原
          </h3>

          <section>
            <p>此次出行, 我们主要是来看Roselia的live的. 提到看live, 必须得要应援棒.</p>
            <p>然而Roselia的热度太高, 导致应援棒的购买难度很大, 我们便直直去了秋叶原开始淘宝.</p>
            <div className="flex gap-2">
              <SRImage
                className="flex-1 w-1/3"
                photo={{
                  id: 1,
                  url: '/blog/jp/IMG_2987.JPG',
                  bgPos: 'center',
                  position: '',
                  title: '秋葉原駅',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: '秋葉原駅'
                }}
              ></SRImage>
              <SRImage
                className="w-1/3"
                photo={{
                  id: 1,
                  url: '/blog/jp/IMG_2990.JPG',
                  bgPos: 'center',
                  position: '',
                  title: '街景',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: '街景'
                }}
              ></SRImage>
            </div>
            <p>逛着各种各样的周边店, 商品, 琳琅满目.</p>

            <div className="my-6">
              <SRImage
                className="w-[85cqw] mx-auto rounded-lg shadow-md my-4"
                photo={{
                  id: 1,
                  url: '/blog/jp/IMG_2988.JPG',
                  bgPos: 'center',
                  position: '',
                  title: '',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: 'woc,是原批'
                }}
              ></SRImage>
            </div>
            <p>然而找遍各个周边店也没发现rosenchor的应援棒. 白忙活半天, 只能先去酒店办理入住了.</p>
          </section>

          <h3 className="anchor" id="新宿">
            新宿
          </h3>
          <section>
            <p>不算豪华的ホテル, 一晚600RMB的价格, 不愧是发达国家. 泡了个澡, 我们便出发去觅食. 走一会便到了歌舞伎町.</p>
            <SRImage
              className="w-[85cqw] mx-auto rounded-lg shadow-md my-4"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_2994.JPG',
                bgPos: 'center',
                position: '',
                title: '',
                title2: '',
                latlng: '',
                description: '',
                tip: '歌舞伎町'
              }}
            ></SRImage>
            <p>
              街上很多皮条客, 一路上被问个不停, 不愧是亚洲第一红灯区. 话说怎么看出来我是中国人的, 上来就跟我说中文. 找了半天觅食的地方, 最后挑了坨大的: 天龍自助烤肉. (已入黑名单)
            </p>
          </section>

          <h2 className="anchor" id="Day2">
            Day2
          </h2>
          <section>
            <p>昨天没买到棒子, 今天上午一行人准备出发去往池袋的Bushiroad的周边店. 下午5点才开始live, 还有时间.</p>
            <p>
              乘着哥几个还在睡觉的, 我便一个出去走走, 找了个最近的公园. 公园附近是一所幼儿园, 但是已经没什么人, 破败的学校门牌, 日本的低生育率可见一斑. 希望我们国家不会有这般未来.
            </p>
            <video
              className="block mx-auto max-w-[80%] max-h-[60vh] my-6 rounded-lg shadow-lg border border-gray-200"
              controls
              playsInline
              src={resolveMediaUrl('/blog/jp/IMG_3001.MOV')}
            ></video>
            <p>热完身走回酒店, 朋友们刚好洗漱完毕走到楼下, 我们便一起出发去买应援棒.</p>
          </section>

          <h3 className="anchor" id="池袋">
            池袋
          </h3>
          <section>
            <p>
              奔往池袋, Bushiroad的周边店已经排起了长队, 在楼道里依稀可以听到新曲在循环播放, 心里洋溢的快乐已经溢出胸腔, 在嘴边哼了起来.
            </p>

            <div className="flex flex-col md:flex-row gap-4 my-8 items-start">
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-md"
                  photo={{
                    id: 1,
                    url: '/blog/jp/IMG_3004.JPG',
                    bgPos: 'center',
                    position: '',
                    title: 'MyGo!!!',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: 'MyGo!!!'
                  }}
                />
                <p className="mt-2 text-sm text-gray-500 italic text-center">排了几十分钟, 进去发现棒子也卖完了...</p>
              </div>
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-md"
                  photo={{
                    id: 1,
                    url: '/blog/jp/IMG_3003.JPG',
                    bgPos: 'center',
                    position: '',
                    title: '这个买的人还挺多',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: '这个买的人还挺多'
                  }}
                />
                <p className="mt-2 text-sm text-gray-500 italic text-center">三个抽选券真想给他扣走 😇</p>
              </div>
            </div>

            <p>最后再去一趟 Animate, 没有就只能去买场贩了.</p>

            <div className="flex flex-col md:flex-row gap-4 my-8 items-start">
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-md"
                  photo={{
                    id: 1,
                    url: '/blog/jp/IMG_3007.JPG',
                    bgPos: 'center',
                    position: '',
                    title: 'Animate',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: 'Animate'
                  }}
                />
                <p className="mt-2 text-sm text-gray-500 italic text-center">Animate 秋叶原店入口</p>
              </div>
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-md"
                  photo={{
                    id: 1,
                    url: '/blog/jp/IMG_3006.JPG',
                    bgPos: 'center',
                    position: '',
                    title: 'Ave Mujica',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: 'Ave Mujica'
                  }}
                />
                <p className="mt-2 text-sm text-gray-500 italic text-center">一进门就是一言难尽的假面乐队</p>
              </div>
            </div>
            <p>不出意外的出意外了, 还是没有买到.</p>
          </section>

          <h3 className="anchor" id="出发武蔵野">
            出发武蔵野
          </h3>
          <section>
            <p>
              地铁出发, 目标live现场: 武蔵野総合体育館.
              <br />
              live是下午5点才开始, 我们赶集到现场排队买场贩, 所幸还好还有库存. (所有我们费了半天劲图个啥. . . )
              <br />
              天气倒是令人心旷神怡, 注定是难忘的一天.
            </p>

            <div className="flex flex-col md:flex-row gap-6 my-10 items-center">
              <video
                className="flex-[1.5] max-h-[60vh] w-full rounded-lg shadow-xl"
                controls
                playsInline
                src={resolveMediaUrl('/blog/jp/IMG_3014.MOV')}
              ></video>

              <SRImage
                className="flex-1 rounded-lg shadow-md"
                photo={{
                  id: 1,
                  url: '/blog/jp/IMG_3017.jpg',
                  bgPos: 'center',
                  position: '',
                  title: 'SHOUT！',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: 'SHOUT！'
                }}
              />
            </div>
          </section>

          <h3 className="anchor" id="玫瑰热情绽放">
            「Stille Nacht, Rosen Nacht」
          </h3>
          <section>
            <p>寂静的夜, 玫瑰却热情四溢地绽放了.</p>
            <SRImage
              className="w-[90cqw] mx-auto rounded-lg shadow-md my-8"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3020.JPG',
                bgPos: 'center',
                position: '',
                title: '一进来就看见祥子垮了个批脸, shit',
                title2: '',
                latlng: '',
                description: '',
                tip: '一进来就看见祥子垮了个批脸, shit'
              }}
            />
            <p>由于现场不让录制视频, 没有留下Vlog, 比较遗憾.</p>
            <p>以为我会就此收手吗? NoNoNo, 鬼子不让干我就偏要干.</p>
            <video
              className="block mx-auto max-h-[75vh] w-auto my-10 rounded-xl shadow-2xl border-4 border-red-500/20"
              controls
              playsInline
              src={resolveMediaUrl('/blog/jp/IMG_3190.MOV')}
            ></video>
            <p>一边偷拍, 一边切棒子颜色真是要我命. . . </p>
            <p>猛站三个小时, 返场3次, 现场的热情也没有丝毫减弱, 这就是二刺螈的实力!</p>
            <SRImage
              className="w-[85cqw] mx-auto rounded-lg shadow-lg my-8"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3030.JPG',
                bgPos: 'center',
                position: '',
                title: '素敵な夜をありがとう',
                title2: '',
                latlng: '',
                description: '',
                tip: '真的感谢带来这么美妙的live'
              }}
            />
          </section>

          <h2 className="anchor" id="Day3">
            Day3
          </h2>
          <h3 className="anchor" id="神村">
            神村
          </h3>
          <section>
            <p>今天是live的第二天, 由于之前天龙留下的阴影, 我们便绕路去附近吃了风评很好的神村自助.</p>
            <SRImage
              className="w-full"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3044.JPG',
                bgPos: 'center',
                position: '',
                title: 'か米村',
                title2: '',
                latlng: '',
                description: '',
                tip: 'か米村'
              }}
            />
            <p>爽吃三个小时后, 我们便来到了live现场.</p>
          </section>

          <h3 className="anchor" id="Adventus">
            「Adventus」
          </h3>
          <section>
            <p>
              比起昨天的快乐互动, Ave Mujica是全程念台词, 光 せかい 念了不下50次, 不愧是祥子, 为了保护新的乐队的世界观, 可真是煞费苦心.
            </p>
            <SRImage
              className="w-1/2 mx-auto"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3104.jpg',
                bgPos: 'center',
                position: '',
                title: '没错, 是我干的',
                title2: '',
                latlng: '',
                description: '',
                tip: '没错, 是我干的'
              }}
            />
            <p>
              不知道是不是歌太少了没得唱了, 现场开始播放Ave Mujica第一集, 也算是提前放映了. (制作组能不能加个中文字幕, 不知道我啃不动生肉吗, この野郎)
            </p>
            <SRImage
              className="w-[85cqw] mx-auto rounded-lg shadow-md my-8"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3054.JPG',
                bgPos: 'center',
                position: '',
                title: '现场',
                title2: '',
                latlng: '',
                description: '',
                tip: '现场'
              }}
            />
            <p>
              然而动画最后一幕, 随着喵梦把所有人的面具摘下, 大幕升起的那一刻, 现场直接沸腾了, 动漫这一刻与现实完美的结合. 这么牛逼的企划真是祥子作的吗?
            </p>
            <SRImage
              className="w-[50cqw] mx-auto rounded-lg shadow-md my-8 transition-transform hover:rotate-2"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3104.jpg',
                bgPos: 'center',
                position: '',
                title: '没错, 是我',
                title2: '',
                latlng: '',
                description: '',
                tip: '没错, 是我'
              }}
            />
          </section>

          <h2 className="anchor" id="Day4">
            Day4
          </h2>
          <h3 className="anchor" id="返程">
            返程
          </h3>
          <section>
            <p>
              由于东京离成田机场实在比较远, 我们一早便启程去往机场.
              <br />
              一路上听着live演唱过的歌曲, 回想着这两天的见闻.
              <br />
              世界是真的广阔啊, 这里的确是完全不一样的世界, 之前可能在各种图片视频里看过听过, 但是都不如真真正正的经历一分钟. 不能再做电脑前那个自以为无所不可知的自己了, 切身的见闻才算真正的有所知.
            </p>
            <SRImage
              className="w-full"
              photo={{
                id: 1,
                url: '/blog/jp/IMG_3058.JPG',
                bgPos: 'center',
                position: '',
                title: '返程',
                title2: '',
                latlng: '',
                description: '',
                tip: '返程'
              }}
            />
            <p>有了新的勇气, 相信下次相见不会太久!</p>
          </section>
          <ArticleNextFooter />
        </article>
      </div>
    </div>
  );
}
