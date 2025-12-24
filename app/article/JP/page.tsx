'use client';
import { useEffect, useRef } from 'react';
import LoadingMask, { LoadingMaskHandle } from '@/app/ui/LoadingMask';
import { whenDOMReady } from '@/utils/helper';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';
import { MPromise } from '@/utils/Lib/cls';
import SRCard, { SRCardHandle } from '@/app/ui/SRCard';

export default function JP() {
  const maskRef = useRef<LoadingMaskHandle>(null);
  const galleryPromise = new MPromise<void>();
  const SRCRef = useRef<SRCardHandle>(null);

  useEffect(() => {
    whenDOMReady().then(() => {
      galleryPromise.promise.then(() => {
        maskRef.current?.hide();
      });
    });
  });

  return (
    <div className={styles.article}>
      <SRCard ref={SRCRef}></SRCard>
      <div className={styles.header}>
        {<PhotoGallery album="jp" onReady={() => galleryPromise.resolve()}></PhotoGallery>}
      </div>
      <article className={styles.content}>
        <h2>
          <a href="#Day1" className="headerlink" title="Day1"></a>Day1
        </h2>
        <h3>
          <a href="#南京禄口机场" className="headerlink" title="南京禄口机场"></a>
          南京禄口机场
        </h3>

        <section className="emp">
          <p>
            <img
              src="https://pan.dongzx.lol/api/v4/file/content/7xAs1/0/IMG_2980.JPG?sign=BQiYb3K36N89d2ma3gQTeeSBm-kugx5RHq4VPMqdp44%3D%3A0"
              onClick={() =>
                SRCRef.current?.show({
                  id: 1,
                  url: 'https://pan.dongzx.lol/api/v4/file/content/7xAs1/0/IMG_2980.JPG?sign=BQiYb3K36N89d2ma3gQTeeSBm-kugx5RHq4VPMqdp44%3D%3A0',
                  bgPos: 'center',
                  position: '',
                  title: '南京禄口机场',
                  title2: '',
                  latlng: '',
                  description: '',
                  tip: ''
                })
              }
              alt=""
            ></img>
            计划了半年的出行计划终于如约而至了，一切都已经准备就绪。一下班便急冲冲的冲向地铁，园区站出发，目标：东京。这是个漫长的旅途，哥几个先到桌游店玩一晚上，凌晨去赶飞机。
            <span className="shy-block">此处过程不想回忆，因为我第一次打线下德扑，一晚上输了一千块。</span>
          </p>
          <p>凌晨时分，随着日出，我们拿着登机牌，值完机，迎着朝阳踏进飞往11区的登机走廊。</p>
        </section>

        <h3>
          <a href="#在天上" className="headerlink" title="在天上"></a>
          在天上
        </h3>
        <section>
          <p>飞机上，我们讨论着三天的行程，没一会便困意涌现。</p>
          <p>
            通宵带来的困意就丢在这平流层，一切都在我们的计划之中。但是旁边三个女的实在是聒噪，硬是在那叫了三个小时，一会哈哈大笑，一会惊叫吵闹，一会又开始往脸上咔咔拍粉。硬控我三个小时，所以说计划赶不上变化呢。
          </p>
        </section>
        {/* 

<h3 id="成田机场"><a href="#成田机场" className="headerlink" title="成田机场" ></a>成田机场</h3><p>入关成功，此时已经来到了下午3点。换完手机卡，开始去往酒店。</p>
<a href="https://pan.dongzx.lol/api/v4/file/content/B3eF2/0/IMG_2982.JPG?sign=GI1HveYN2tRN3vqp7ttB_WseXqoHuDQDfIloukt13RU%3D%3A0" data-fancybox="gallery" data-caption="" data-thumb="https://pan.dongzx.lol/api/v4/file/content/B3eF2/0/IMG_2982.JPG?sign=GI1HveYN2tRN3vqp7ttB_WseXqoHuDQDfIloukt13RU%3D%3A0"><img src="https://pan.dongzx.lol/api/v4/file/content/B3eF2/0/IMG_2982.JPG?sign=GI1HveYN2tRN3vqp7ttB_WseXqoHuDQDfIloukt13RU%3D%3A0"></a>

<p>酒店在新宿，我们买了机场大巴的票，又坐了个把小时终于来到东京。</p>
<h3 id="秋叶原"><a href="#秋叶原" className="headerlink" title="秋叶原" ></a>秋叶原</h3><p>此次出行，我们主要是来看Roselia的live的。提到看live，必须得要应援棒。然而萝的热度太高，导致应援棒的购买难度很大，我们便直直去了秋叶原开始淘宝。</p>
<p>来到秋叶原，动漫、游戏中的场景便一一映射出脑海。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/ox6hK/0/IMG_2987.JPG?sign=PptlT9VL6nYXNG9YpV_K005-pR-etPr_CWWo5RlstOk=:0" data-fancybox="gallery" data-caption="秋葉原駅" data-thumb="https://pan.dongzx.lol/api/v4/file/content/ox6hK/0/IMG_2987.JPG?sign=PptlT9VL6nYXNG9YpV_K005-pR-etPr_CWWo5RlstOk=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/ox6hK/0/IMG_2987.JPG?sign=PptlT9VL6nYXNG9YpV_K005-pR-etPr_CWWo5RlstOk=:0" alt="秋葉原駅"></a><div className="img-alt is-center">秋葉原駅</div></p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/loKug/0/IMG_2990.JPG?sign=KYL9hXMqWNlLcDceuawlfQYgvK_vncdH0j1v2NXScow=:0" data-fancybox="gallery" data-caption="街景" data-thumb="https://pan.dongzx.lol/api/v4/file/content/loKug/0/IMG_2990.JPG?sign=KYL9hXMqWNlLcDceuawlfQYgvK_vncdH0j1v2NXScow=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/loKug/0/IMG_2990.JPG?sign=KYL9hXMqWNlLcDceuawlfQYgvK_vncdH0j1v2NXScow=:0" alt="街景"></a><div className="img-alt is-center">街景</div></p>
<p>逛着各种各样的周边店，商品，琳琅满目。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/333SA/0/IMG_2988.JPG?sign=nbpg5ek849FfwULJjYo-RW0VYn8ie9hnjFBbw1GIQgI=:0" data-fancybox="gallery" data-caption="woc,是原批" data-thumb="https://pan.dongzx.lol/api/v4/file/content/333SA/0/IMG_2988.JPG?sign=nbpg5ek849FfwULJjYo-RW0VYn8ie9hnjFBbw1GIQgI=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/333SA/0/IMG_2988.JPG?sign=nbpg5ek849FfwULJjYo-RW0VYn8ie9hnjFBbw1GIQgI=:0" alt="woc,是原批"></a><div className="img-alt is-center">woc,是原批</div></p>
<p>然而找遍各个周边店也没发现rosenchor的应援棒。白忙活半天，只能先去酒店办理入住了。</p>
<h3 id="新宿"><a href="#新宿" className="headerlink" title="新宿" ></a>新宿</h3><p>不算豪华的ホテル，一晚600RMB的价格，不愧是发达国家。泡了个澡，我们便出发去觅食。走一会便到了歌舞伎町。</p>
<a href="https://pan.dongzx.lol/api/v4/file/content/xwlhq/0/IMG_2994.JPG?sign=Ey0bS2bv3btPgK5O-cbqLTltvmh7Q-f6t3jv_tchKn8%3D%3A0" data-fancybox="gallery" data-caption="" data-thumb="https://pan.dongzx.lol/api/v4/file/content/xwlhq/0/IMG_2994.JPG?sign=Ey0bS2bv3btPgK5O-cbqLTltvmh7Q-f6t3jv_tchKn8%3D%3A0"><img src="https://pan.dongzx.lol/api/v4/file/content/xwlhq/0/IMG_2994.JPG?sign=Ey0bS2bv3btPgK5O-cbqLTltvmh7Q-f6t3jv_tchKn8%3D%3A0"></a> */}

        {/* <p>街上很多皮条客，一路上被问个不停，不愧是亚洲第一红灯区。话说怎么看出来我是中国人的，上来就跟我说中文。找了半天觅食的地方，最后挑了坨大的：天龍自助烤肉。（已入黑名单）</p>
<h2 id="Day2"><a href="#Day2" className="headerlink" title="Day2" ></a>Day2</h2><p>昨天没买到棒子，今天上午一行人准备出发去往池袋的Bushiroad的周边店。下午5点才开始live，还有时间。</p>
<p>乘着哥几个还在睡觉的，我便一个出去走走，找了个最近的公园。公园附近是一所幼儿园，但是已经没什么人，破败的学校门牌，日本的低生育率可见一斑。希望我们国家不会有这般未来。</p>
<p><video controls="" playsinline="" src="https://pan.dongzx.lol/api/v4/file/content/Ml0sG/0/IMG_3001.MOV?sign=vH8HH48iXN6oWvrF1jjr2U8g7xSdi-GtP9NUjBhudpQ%3D%3A0"></video></p>
<p>热完身走回酒店，朋友们刚好洗漱完毕走到楼下，我们便一起出发去买应援棒。</p>
<h3 id="池袋"><a href="#池袋" className="headerlink" title="池袋" ></a>池袋</h3><p>奔往池袋，Bushiroad的周边店已经排起了长队，在楼道里依稀可以听到新曲在循环播放，心里洋溢的快乐已经溢出胸腔，在嘴边哼了起来。</p>
<div id="礎の花冠" className="aplayer aplayer-withlist">
<div className="aplayer-body">
    <div className="aplayer-pic" style="background-image: url(&quot;https://pan.dongzx.lol/api/v4/file/content/02wIl/0/COVER.jpg?sign=oJ_I3VO5pGxRen9hraiMFH0J6okrr_YPztAZiVuPg88%3D%3A0&quot;);background-color: #b7daff;">
        <div className="aplayer-button aplayer-play"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg></div>
    </div>
    <div className="aplayer-info">
        <div className="aplayer-music">
            <span className="aplayer-title">礎の花冠</span>
            <span className="aplayer-author"> - Roselia</span>
        </div>
        <div className="aplayer-lrc">
            <div className="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>
        </div>
        <div className="aplayer-controller">
            <div className="aplayer-bar-wrap">
                <div className="aplayer-bar">
                    <div className="aplayer-loaded" style="width: 6.87463%;"></div>
                    <div className="aplayer-played" style="width: 0; background: #b7daff;">
                        <span className="aplayer-thumb" style="background: #b7daff;">
                            <span className="aplayer-loading-icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="aplayer-time">
                <span className="aplayer-time-inner">
                    <span className="aplayer-ptime">00:00</span> / <span className="aplayer-dtime">04:06</span>
                </span>
                <span className="aplayer-icon aplayer-icon-back">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>
                </span>
                <span className="aplayer-icon aplayer-icon-play">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>
                </span>
                <span className="aplayer-icon aplayer-icon-forward">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>
                </span>
                <div className="aplayer-volume-wrap">
                    <button type="button" className="aplayer-icon aplayer-icon-volume-down"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg></button>
                    <div className="aplayer-volume-bar-wrap">
                        <div className="aplayer-volume-bar">
                            <div className="aplayer-volume" style="height: 70%; background: rgb(183, 218, 255);"></div>
                        </div>
                    </div>
                </div>
                <button type="button" className="aplayer-icon aplayer-icon-order">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>
                </button>
                <button type="button" className="aplayer-icon aplayer-icon-loop">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>
                </button>
                <button type="button" className="aplayer-icon aplayer-icon-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>
                </button>
                <button type="button" className="aplayer-icon aplayer-icon-lrc">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>
                </button>
            </div>
        </div>
    </div>
    <div className="aplayer-notice"></div>
    <div className="aplayer-miniswitcher"><button className="aplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg></button></div>
</div>
<div className="aplayer-list" style="max-height: 250px">
    <ol style="max-height: 250px">
        
<li className="aplayer-list-light">
    <span className="aplayer-list-cur" style="background-color: #b7daff;"></span>
    <span className="aplayer-list-index">1</span>
    <span className="aplayer-list-title">礎の花冠</span>
    <span className="aplayer-list-author">Roselia</span>
</li>

<li>
    <span className="aplayer-list-cur" style="background-color: #b7daff;"></span>
    <span className="aplayer-list-index">2</span>
    <span className="aplayer-list-title">FRONTIER FANTASIA</span>
    <span className="aplayer-list-author">Roselia</span>
</li>

    </ol>
</div>
</div>


<p><a href="https://pan.dongzx.lol/api/v4/file/content/9j1S6/0/IMG_3004.JPG?sign=jx1l-yQRTRSmQXH7Vumb3ddyp_LJCU4kIFuIb28zfkI=:0" data-fancybox="gallery" data-caption="MyGo!!!" data-thumb="https://pan.dongzx.lol/api/v4/file/content/9j1S6/0/IMG_3004.JPG?sign=jx1l-yQRTRSmQXH7Vumb3ddyp_LJCU4kIFuIb28zfkI=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/9j1S6/0/IMG_3004.JPG?sign=jx1l-yQRTRSmQXH7Vumb3ddyp_LJCU4kIFuIb28zfkI=:0" alt="MyGo!!!"></a><div className="img-alt is-center">MyGo!!!</div></p>
<p>排了几十分钟，进去发现棒子也卖完了，CD卖得只剩几张，里面三个抽选券真想给他扣走。😇😇😇</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/VqpC9/0/IMG_3003.JPG?sign=BEfifVdbCsU6BF0ZIX7KTQjSS1EiIpmJ6F9v3sXzLqw=:0" data-fancybox="gallery" data-caption="这个买的人还挺多" data-thumb="https://pan.dongzx.lol/api/v4/file/content/VqpC9/0/IMG_3003.JPG?sign=BEfifVdbCsU6BF0ZIX7KTQjSS1EiIpmJ6F9v3sXzLqw=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/VqpC9/0/IMG_3003.JPG?sign=BEfifVdbCsU6BF0ZIX7KTQjSS1EiIpmJ6F9v3sXzLqw=:0" alt="这个买的人还挺多"></a><div className="img-alt is-center">这个买的人还挺多</div></p>
<p>最后再去一趟 Animate，没有就只能去买场贩了。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/1pOfz/0/IMG_3007.JPG?sign=dlS8cTJTQUKGsh3j0_lwcBUJNL4JKtshIu8R3lKDCfA=:0" data-fancybox="gallery" data-caption="Animate" data-thumb="https://pan.dongzx.lol/api/v4/file/content/1pOfz/0/IMG_3007.JPG?sign=dlS8cTJTQUKGsh3j0_lwcBUJNL4JKtshIu8R3lKDCfA=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/1pOfz/0/IMG_3007.JPG?sign=dlS8cTJTQUKGsh3j0_lwcBUJNL4JKtshIu8R3lKDCfA=:0" alt="Animate"></a><div className="img-alt is-center">Animate</div></p>
<p>一进门就是一言难尽的假面乐队。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/03whl/0/IMG_3006.JPG?sign=jHzRirZFLQTPRHIZgxgQ3v7sC9GKlrfXii5f9MY-a6g=:0" data-fancybox="gallery" data-caption="Ave Mujica" data-thumb="https://pan.dongzx.lol/api/v4/file/content/03whl/0/IMG_3006.JPG?sign=jHzRirZFLQTPRHIZgxgQ3v7sC9GKlrfXii5f9MY-a6g=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/03whl/0/IMG_3006.JPG?sign=jHzRirZFLQTPRHIZgxgQ3v7sC9GKlrfXii5f9MY-a6g=:0" alt="Ave Mujica"></a><div className="img-alt is-center">Ave Mujica</div></p>
<p>不出意外的出意外了，还是没有买到。</p>
<h3 id="出发武蔵野"><a href="#出发武蔵野" className="headerlink" title="出发武蔵野" ></a>出发武蔵野</h3><p>地铁出发，目标live现场：武蔵野総合体育館。<br>live是下午5点才开始，我们赶集到现场排队买场贩，所幸还好还有库存。（所有我们费了半天劲图个啥。。。）<br>天气倒是令人心旷神怡，注定是难忘的一天。</p>
<p><video controls="" playsinline="" src="https://pan.dongzx.lol/api/v4/file/content/NY1S9/0/IMG_3014.MOV?sign=POYhm69Ceefg-q-O8jTGjkvhGFI7ygyx7qAoOLS1iJI%3D%3A0"></video></p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/2PECo/0/IMG_3017.jpg?sign=kc19tliUBpyHr-zjhers6aqlb0kDxe2wjOF-uxXlJes=:0" data-fancybox="gallery" data-caption="SHOUT！" data-thumb="https://pan.dongzx.lol/api/v4/file/content/2PECo/0/IMG_3017.jpg?sign=kc19tliUBpyHr-zjhers6aqlb0kDxe2wjOF-uxXlJes=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/2PECo/0/IMG_3017.jpg?sign=kc19tliUBpyHr-zjhers6aqlb0kDxe2wjOF-uxXlJes=:0" alt="SHOUT！"></a><div className="img-alt is-center">SHOUT！</div></p>
<h3 id="「Stille-Nacht-Rosen-Nacht」"><a href="#「Stille-Nacht-Rosen-Nacht」" className="headerlink" title="「Stille Nacht,Rosen Nacht」" ></a>「Stille Nacht,Rosen Nacht」</h3><p>寂静的夜，玫瑰却热情四溢地绽放了。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/DlkSl/0/IMG_3020.JPG?sign=vjNT5b6ufLIxtdzU_teaaBZKjUzq5jGlP49yTLyA90s=:0" data-fancybox="gallery" data-caption="一进来就看见祥子垮了个批脸, shit" data-thumb="https://pan.dongzx.lol/api/v4/file/content/DlkSl/0/IMG_3020.JPG?sign=vjNT5b6ufLIxtdzU_teaaBZKjUzq5jGlP49yTLyA90s=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/DlkSl/0/IMG_3020.JPG?sign=vjNT5b6ufLIxtdzU_teaaBZKjUzq5jGlP49yTLyA90s=:0" alt="一进来就看见祥子垮了个批脸, shit"></a><div className="img-alt is-center">一进来就看见祥子垮了个批脸, shit</div></p>
<p>由于现场不让录制视频，没有留下Vlog，比较遗憾。</p>
<p>以为我会就此收手吗？NoNoNo，鬼子不让干我就偏要干。</p>
<p><video controls="" playsinline="" src="https://pan.dongzx.lol/api/v4/file/content/AMMHp/0/IMG_3190.MOV?sign=YE3l4C9i1pCGGDm85VMnZvBrES8410hV-7U_EXkHX0Q%3D%3A0"></video></p>
<p>一边偷拍，一边切棒子颜色真是要我命。。。</p>
<p>猛站三个小时，返场3次，现场的热情也没有丝毫减弱，这就是二刺螈的实力！</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/pqksD/0/IMG_3030.JPG?sign=95WKPQoEYJhynGXwe_t0bPnDz6uaZ4gCQW7YiUUH6iQ=:0" data-fancybox="gallery" data-caption="就像sayo写的那样，素敵な夜をありがとう，真的感谢带来这么美妙的live" data-thumb="https://pan.dongzx.lol/api/v4/file/content/pqksD/0/IMG_3030.JPG?sign=95WKPQoEYJhynGXwe_t0bPnDz6uaZ4gCQW7YiUUH6iQ=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/pqksD/0/IMG_3030.JPG?sign=95WKPQoEYJhynGXwe_t0bPnDz6uaZ4gCQW7YiUUH6iQ=:0" alt="就像sayo写的那样，素敵な夜をありがとう，真的感谢带来这么美妙的live"></a><div className="img-alt is-center">就像sayo写的那样，素敵な夜をありがとう，真的感谢带来这么美妙的live</div></p>
<h2 id="Day3"><a href="#Day3" className="headerlink" title="Day3" ></a>Day3</h2><h3 id="神村"><a href="#神村" className="headerlink" title="神村" ></a>神村</h3><p>今天是live的第二天，由于之前天龙留下的阴影，我们便绕路去附近吃了风评很好的神村自助。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/dJxfG/0/IMG_3044.JPG?sign=YZiz373Pv6UAH1wObUxEWSWsHDrb0fwaaHqgtvlTzAA=:0" data-fancybox="gallery" data-caption="かみむら" data-thumb="https://pan.dongzx.lol/api/v4/file/content/dJxfG/0/IMG_3044.JPG?sign=YZiz373Pv6UAH1wObUxEWSWsHDrb0fwaaHqgtvlTzAA=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/dJxfG/0/IMG_3044.JPG?sign=YZiz373Pv6UAH1wObUxEWSWsHDrb0fwaaHqgtvlTzAA=:0" alt="かみむら"></a><div className="img-alt is-center">かみむら</div></p>
<p>爽吃三个小时后，我们便来到了live现场。</p>
<h3 id="「Adventus」"><a href="#「Adventus」" className="headerlink" title="「Adventus」" ></a>「Adventus」</h3><p>比起昨天的快乐互动，Ave Mujica是全程念台词，光 せかい 念了不下50次，不愧是祥子，为了保护新的乐队的世界观，可真是煞费苦心。</p>
<a href="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0" data-fancybox="gallery" data-caption="没错，是我干的" data-thumb="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0"><img src="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0" style="width: 300px" alt="没错，是我干的"></a><div className="img-alt is-center">没错，是我干的</div>

<p>不知道是不是歌太少了没得唱了，现场开始播放Ave Mujica第一集，也算是提前放映了。（制作组能不能加个中文字幕，不知道我啃不动生肉吗，この野郎）</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/oG6IK/0/IMG_3054.JPG?sign=Eh-kMdxVrAv_15I56kymunF-qE2BbFL-795fP9qP1jA=:0" data-fancybox="gallery" data-caption="现场" data-thumb="https://pan.dongzx.lol/api/v4/file/content/oG6IK/0/IMG_3054.JPG?sign=Eh-kMdxVrAv_15I56kymunF-qE2BbFL-795fP9qP1jA=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/oG6IK/0/IMG_3054.JPG?sign=Eh-kMdxVrAv_15I56kymunF-qE2BbFL-795fP9qP1jA=:0" alt="现场"></a><div className="img-alt is-center">现场</div></p>
<p>然而动画最后一幕，随着喵梦把所有人的面具摘下，大幕升起的那一刻，现场直接沸腾了，动漫这一刻与现实完美的结合。这么牛逼的企划真是祥子作的吗？</p>
<a href="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0" data-fancybox="gallery" data-caption="没错，是我" data-thumb="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0"><img src="https://pan.dongzx.lol/api/v4/file/content/R0pTM/0/IMG_3104.jpg?sign=bUcFxB7N4zwYRXGtJupvRyZC9Cu73Yx1r6yvT2jAsq8%3D%3A0" style="width: 300px" alt="没错，是我"></a><div className="img-alt is-center">没错，是我</div>

<h2 id="Day4"><a href="#Day4" className="headerlink" title="Day4" ></a>Day4</h2><h3 id="返程"><a href="#返程" className="headerlink" title="返程" ></a>返程</h3><p>由于东京离成田机场实在比较远，我们一早便启程去往机场。<br>一路上听着live演唱过的歌曲，回想着这两天的见闻。<br>世界是真的广阔啊，这里的确是完全不一样的世界，之前可能在各种图片视频里看过听过，但是都不如真真正正的经历一分钟。不能再做电脑前那个自以为无所不可知的自己了，切身的见闻才算真正的有所知。</p>
<p><a href="https://pan.dongzx.lol/api/v4/file/content/kK2iJ/0/IMG_3058.JPG?sign=RYS0rJ7dpigvAnSZIVfNEwFhkVlX27qRTx33y3yfPfg=:0" data-fancybox="gallery" data-caption="返程" data-thumb="https://pan.dongzx.lol/api/v4/file/content/kK2iJ/0/IMG_3058.JPG?sign=RYS0rJ7dpigvAnSZIVfNEwFhkVlX27qRTx33y3yfPfg=:0"><img src="https://pan.dongzx.lol/api/v4/file/content/kK2iJ/0/IMG_3058.JPG?sign=RYS0rJ7dpigvAnSZIVfNEwFhkVlX27qRTx33y3yfPfg=:0" alt="返程"></a><div className="img-alt is-center">返程</div></p>
<p>有了新的勇气，相信下次相见不会太久！</p> */}
      </article>
      <LoadingMask ref={maskRef}></LoadingMask>
    </div>
  );
}
