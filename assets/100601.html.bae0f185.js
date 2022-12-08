import{_ as n,o as s,c as a,a as p}from"./app.9376a9a7.js";const t={},e=p(`<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p><strong>\u4EAB\u5143\u6A21\u5F0F\u7684\u8FC7\u7A0B\u662F\u5265\u79BB\u5916\u90E8\u72B6\u6001\uFF0C\u5E76\u628A\u5916\u90E8\u72B6\u6001\u4FDD\u5B58\u5728\u5176\u4ED6\u5730\u65B9\uFF0C\u5728\u5408\u9002\u7684\u65F6\u523B\u518D\u628A\u5916\u90E8\u72B6\u6001\u7EC4\u88C5\u8FDB\u5171\u4EAB\u5BF9\u8C61</strong></p><p>\u4EAB\u5143\u6A21\u5F0F\u662F\u4E00\u79CD\u5F88\u597D\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848</p><p>\u4EAB\u5143\u6A21\u5F0F\u91CD\u8981\u7684\u5C31\u662F\u5185\u90E8\u72B6\u6001\u8DDF\u5916\u90E8\u72B6\u6001\u3002\u90A3\u4E48\u5185\u90E8\u72B6\u6001\u8DDF\u5916\u90E8\u72B6\u6001\u7684\u5212\u5206\u5C31\u5C24\u5176\u91CD\u8981\u4E86\u3002</p><ul><li>\u5185\u90E8\u72B6\u6001\u5B58\u50A8\u4E8E\u5BF9\u8C61\u5185\u90E8</li><li>\u5185\u90E8\u72B6\u6001\u53EF\u4EE5\u88AB\u4E00\u4E9B\u5BF9\u8C61\u5171\u4EAB</li><li>\u5185\u90E8\u72B6\u6001\u72EC\u7ACB\u4E8E\u5177\u4F53\u7684\u573A\u666F\uFF0C\u901A\u5E38\u4E0D\u4F1A\u6539\u53D8</li><li>\u5916\u90E8\u72B6\u6001\u53D6\u51B3\u4E8E\u5177\u4F53\u7684\u573A\u666F\uFF0C\u5E76\u6839\u636E\u573A\u666F\u800C\u53D8\u5316\uFF0C\u5916\u90E8\u72B6\u6001\u4E0D\u80FD\u88AB\u5171\u4EAB</li></ul><p>\u4F8B\u5982\uFF0C\u7537\u6A21\u7279\u8DDF\u5973\u6A21\u7279\u5404\u7A7F50\u4EF6\u4E0D\u540C\u7684\u8863\u670D\uFF0C\u90A3\u4E48\u4F9D\u636E\u6027\u522B\u521B\u5EFA\u7537\u5973\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u4E4B\u540E\u5404\u81EA\u4E0D\u540C\u768450\u4EF6\u8863\u670D\u5219\u662F\u53D8\u5316\u7684\u573A\u666F</p><h2 id="\u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20\u7684\u4F8B\u5B50</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Upload\u4E0A\u4F20\u5BF9\u8C61</span>
<span class="token keyword">var</span> <span class="token function-variable function">Upload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">uploadType</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>uploadType <span class="token operator">=</span> uploadType<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5220\u9664\u6587\u4EF6</span>
<span class="token class-name">Upload</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">delFile</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">id</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    uploadManager<span class="token punctuation">.</span><span class="token function">setExternalState</span><span class="token punctuation">(</span> id<span class="token punctuation">,</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// (1)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileSize <span class="token operator">&lt;</span> <span class="token number">3000</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span> \u2019\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6587\u4EF6\u5417\uFF1F &#39; <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileName <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE5\u5382\u51FD\u6570\uFF08\u751F\u6210 upload\u5BF9\u8C61\uFF0C\u907F\u514D\u91CD\u590D\u521B\u5EFA\uFF09</span>
<span class="token keyword">var</span> UploadFactory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> createdFlyWeightObjs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">uploadType</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span> createdFlyWeightObjs <span class="token punctuation">[</span> uploadType<span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> createdFlyWeightObjs <span class="token punctuation">[</span> uploadType<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

          <span class="token comment">// \u5176\u5B9E\u4E0D\u540C\u7684\u4E0A\u4F20\u65B9\u5F0F\u521B\u5EFA\u7684\u4E0A\u4F20\u5BF9\u8C61\u4E5F\u4E0D\u540C\uFF08\u4E66\u4E2D\u4E3A\u4E86\u7B80\u5355\u6240\u4EE5\u7EDF\u4E00\u540C\u4E00\u4E2A\u4E0A\u4F20\u6784\u9020\u51FD\u6570\uFF09</span>
          <span class="token keyword">return</span> createdFlyWeightObjs <span class="token punctuation">[</span> uploadType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Upload</span><span class="token punctuation">(</span> uploadType<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0A\u4F20\u7BA1\u7406\u5668</span>
<span class="token keyword">var</span> uploadManager <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u653E\u5916\u90E8\u5C5E\u6027</span>
    <span class="token keyword">var</span> uploadDatabase <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">id<span class="token punctuation">,</span> uploadType<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> fileSize</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">var</span> flyWeightObj <span class="token operator">=</span> UploadFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> uploadType <span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> <span class="token string">&#39;div&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
          dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
                  <span class="token string">&#39;&lt;span&gt;\u6587\u4EF6\u540D\u79F0\uFF1A&#39;</span><span class="token operator">+</span> fileName <span class="token operator">+</span><span class="token string">&#39;\uFF0C\u6587\u4EF6\u5927\u5C0F\uFF1A &#39;</span><span class="token operator">+</span> fileSize <span class="token operator">+</span><span class="token string">&#39;&lt;/span&gt;&#39;</span> <span class="token operator">+</span>
                  <span class="token string">&#39;&lt;button class=&quot;delFile&quot;&gt;\u5220\u9664&lt;/button&gt;&#39;</span><span class="token punctuation">;</span>

          dom<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span> <span class="token string">&#39;.delFile&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              flyWeightObj<span class="token punctuation">.</span><span class="token function">delFile</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span> dom <span class="token punctuation">)</span><span class="token punctuation">;</span>

          uploadDatabase<span class="token punctuation">[</span> id <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">fileName</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
              <span class="token literal-property property">fileSize</span><span class="token operator">:</span> fileSize<span class="token punctuation">,</span>
              <span class="token literal-property property">dom</span><span class="token operator">:</span> dom
          <span class="token punctuation">}</span><span class="token punctuation">;</span>

          <span class="token keyword">return</span> flyWeightObj <span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// \u5220\u9664\u524D\u4ECE\u5916\u90E8\u5BF9\u8C61\u4E2D\u83B7\u53D6\u5230\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u5220\u9664\u9700\u8981\u83B7\u53D6\u6587\u4EF6\u7684dom\u8DDFfilesize\uFF09</span>
      <span class="token function-variable function">setExternalState</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">id<span class="token punctuation">,</span> flyWeightObj</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">var</span> uploadData <span class="token operator">=</span> uploadDatabase<span class="token punctuation">[</span> id <span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token keyword">in</span> uploadData <span class="token punctuation">)</span><span class="token punctuation">{</span>
              flyWeightObj<span class="token punctuation">[</span> i <span class="token punctuation">]</span> <span class="token operator">=</span> uploadData<span class="token punctuation">[</span> i <span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5168\u5C40\u4E0A\u4F20\u51FD\u6570</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span><span class="token function-variable function">startUpload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">uploadType<span class="token punctuation">,</span> files</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> file<span class="token punctuation">;</span> file <span class="token operator">=</span> files<span class="token punctuation">[</span> i<span class="token operator">++</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> uploadObj <span class="token operator">=</span> uploadManager<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> <span class="token operator">++</span>id<span class="token punctuation">,</span> uploadType<span class="token punctuation">,</span> file<span class="token punctuation">.</span>fileName<span class="token punctuation">,</span> file<span class="token punctuation">.</span>fileSize <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528\u4E0A\u4F20\u51FD\u6570</span>
<span class="token function">startUpload</span><span class="token punctuation">(</span> <span class="token string">&#39;plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;1.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;2.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">3000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;3.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">5000</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">startUpload</span><span class="token punctuation">(</span> <span class="token string">&#39;flash&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;4.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;5.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">3000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;6.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">5000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u5316\u70B9\uFF1A</p><ul><li>\u4EE5\u524D\u54B1\u4EEC\u53EF\u80FD\u4F1A\u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20 <code>new \u4E00\u4E2A Upload\u5BF9\u8C61</code>\uFF0C\u8FD9\u91CC\u54B1\u4EEC\u53EA\u7528\u6839\u636E<code>\u4E0D\u540C\u7C7B\u522B new \u4E00\u4E2A Upload\u5BF9\u8C61</code>\u5373\u53EF \uFF08\u5DE5\u5382\u51FD\u6570\uFF09</li><li>\u5916\u90E8\u5C5E\u6027\u90FD\u5B58\u653E\u5728 <code>uploadDatabase</code> \u4E2D\uFF0C\u5F53\u8981\u5220\u9664\u65F6\u518D\u52A8\u6001\u6DFB\u52A0\u5230 \u5BF9\u5E94\u7684 <code>flyWeightObj</code> \u4E0A</li></ul><h2 id="\u4EAB\u5143\u6A21\u5F0F\u7684\u9002\u7528\u6027" tabindex="-1"><a class="header-anchor" href="#\u4EAB\u5143\u6A21\u5F0F\u7684\u9002\u7528\u6027" aria-hidden="true">#</a> \u4EAB\u5143\u6A21\u5F0F\u7684\u9002\u7528\u6027</h2><ul><li>\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u4E86\u5927\u91CF\u7684\u76F8\u4F3C\u5BF9\u8C61</li><li>\u7531\u4E8E\u4F7F\u7528\u4E86\u5927\u91CF\u5BF9\u8C61\uFF0C\u9020\u6210\u5F88\u5927\u7684\u5185\u5B58\u5F00\u9500</li><li>\u5BF9\u8C61\u7684\u5927\u591A\u6570\u72B6\u6001\u90FD\u53EF\u4EE5\u53D8\u4E3A\u5916\u90E8\u72B6\u6001</li><li>\u5265\u79BB\u51FA\u5BF9\u8C61\u7684\u5916\u90E8\u72B6\u6001\u4E4B\u540E\uFF0C\u53EF\u4EE5\u7528\u76F8\u5BF9\u8F83\u5C11\u7684\u5171\u4EAB\u5BF9\u8C61\u53D6\u4EE3\u5927\u91CF\u5BF9\u8C61</li></ul><p>\u6587\u4EF6\u4E0A\u4F20\u4E2D\uFF1A\u4F9D\u636E\u4E0A\u4F20\u7C7B\u522B\u4E0D\u540C\u521B\u5EFA\u7684<code>plugin\u3001flash</code>\u4E24\u4E2A\u5171\u4EAB\u5BF9\u8C61\uFF0C<code>fileName\u3001fileSize</code> \u4E3A\u5916\u90E8\u72B6\u6001</p><h2 id="\u5173\u4E8E\u5BF9\u8C61\u6C60" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5BF9\u8C61\u6C60" aria-hidden="true">#</a> \u5173\u4E8E\u5BF9\u8C61\u6C60</h2><p>\u5BF9\u8C61\u6C60\u7EF4\u62A4\u4E00\u4E2A\u88C5\u8F7D\u7A7A\u95F2\u5BF9\u8C61\u7684\u6C60\u5B50\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u4E0D\u662F\u76F4\u63A5new\uFF0C\u800C\u662F\u8F6C\u4ECE\u5BF9\u8C61\u6C60\u91CC\u83B7\u53D6\u3002\u5982\u679C\u5BF9\u8C61\u6C60\u91CC\u6CA1\u6709\u7A7A\u95F2\u5BF9\u8C61\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5F53\u83B7\u53D6\u51FA\u7684\u5BF9\u8C61\u5B8C\u6210\u5B83\u7684\u804C\u8D23\u4E4B\u540E\uFF0C\u518D\u8FDB\u5165\u6C60\u5B50\u7B49\u5F85\u88AB\u4E0B\u6B21\u83B7\u53D6</p><p>\u8FD9\u662F\u4E00\u79CD\u72EC\u7279\u7684\u6CA1\u6709\u5206\u79BB\u5916\u90E8\u72B6\u6001\u8DDF\u5185\u90E8\u72B6\u6001\u8FC7\u7A0B\u7684\u4E00\u79CD\u5171\u4EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">objectPoolFactory</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">createObjFn</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> objectPool <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">var</span> obj <span class="token operator">=</span> objectPool<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span>
              <span class="token function">createObjFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">,</span> arguments <span class="token punctuation">)</span> <span class="token operator">:</span> objectPool<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">recover</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">obj</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
          objectPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> iframeFactory <span class="token operator">=</span> <span class="token function">objectPoolFactory</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> <span class="token string">&#39;iframe&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span> iframe <span class="token punctuation">)</span><span class="token punctuation">;</span>

  iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u5B58\u5728\u70B9\u95EE\u9898\uFF0C\u82E5\u8BBE\u7F6E\u4E3A null\uFF0C\u540E\u7EED\u5C82\u4E0D\u662F\u65E0\u6CD5\u6DFB\u52A0\u8FDB\u5BF9\u8C61\u6C60</span>
      iframe<span class="token punctuation">.</span>onload <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">// \u9632\u6B62iframe\u91CD\u590D\u52A0\u8F7D\u7684bug</span>
      iframeFactory<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span> iframe <span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// iframe\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u56DE\u6536\u8282\u70B9</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> iframe<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> iframe1 <span class="token operator">=</span> iframeFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iframe1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://baidu.com&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> iframe2 <span class="token operator">=</span> iframeFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iframe2<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://QQ.com&#39;</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> iframe3 <span class="token operator">=</span> iframeFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  iframe3<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://163.com&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","100601.html.vue"]]);export{r as default};
