import{_ as n,o as s,c as a,a as p}from"./app.9376a9a7.js";const t="/assets/2022-10-22-14-40-32.dafa00c3.png",e="/assets/2022-10-22-14-41-00.1614968f.png",o={},c=p(`<h2 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h2><blockquote><p>\u94FE\u8868\u7684\u53D8\u79CD\uFF1A\u53CC\u5411\u94FE\u8868\u3001\u5FAA\u73AF\u94FE\u8868\u3001\u6709\u5E8F\u94FE\u8868<br>\u5BF9\u6BD4\u4E8E\u6570\u7EC4\u6765\u8BF4\uFF0C\u597D\u5904\u5C31\u662F\u6DFB\u52A0\u6216\u79FB\u9664\u5143\u7D20\u65E0\u9700\u5BF9\u539F\u6709\u5143\u7D20\u8FDB\u884C\u79FB\u52A8</p></blockquote><h3 id="\u6570\u636E\u7ED3\u6784\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784\u5B9E\u73B0" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784\u5B9E\u73B0</h3><h4 id="\u94FE\u8868-1" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868-1" aria-hidden="true">#</a> \u94FE\u8868</h4><p>\u8282\u70B9\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Node<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> element<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">public</span> next<span class="token operator">?</span><span class="token operator">:</span> Node<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u7684\u76F8\u7B49\u5224\u65AD\u51FD\u6570\u53CA\u7C7B\u578B\u5B9A\u4E49</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">defaultEquals</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u94FE\u8868\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LinkdeList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// \u957F\u5EA6\u7EDF\u8BA1</span>
  <span class="token keyword">protected</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// \u5934\u6307\u9488</span>
  <span class="token keyword">protected</span> head<span class="token operator">:</span> Node<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>

  <span class="token comment">// equalsFn\u662F\u81EA\u5DF1\u5B9A\u4E49\u7684\u5224\u65AD\u4E24\u4E2A\u5143\u7D20\u662F\u5426\u76F8\u7B49\u7684\u65B9\u6CD5\uFF08\u56E0\u4E3A\u5143\u7D20\u7684\u7C7B\u578B\u662F\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u5224\u65AD\u76F8\u7B49\u7684\u65B9\u6CD5\u9700\u8981\u81EA\u5DF1\u7F16\u5199\uFF09</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">protected</span> equalsFn<span class="token operator">:</span> IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> defaultEquals<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u94FE\u8868\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20</span>
  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>

    <span class="token keyword">let</span> current

    <span class="token comment">// \u94FE\u8868\u4E3A\u7A7A\u7684\u65F6\u5019</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next

      current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token operator">&amp;&amp;</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next

      <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u79FB\u9664\u7B2C\u4E00\u9879\uFF08\u6CE8\u610F\u5934\u6307\u9488\u53EA\u4F1A\u5728\u79FB\u9664\u7B2C\u4E00\u9879\u7684\u65F6\u5019\u53D1\u751F\u53D8\u5316\uFF0C\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF09</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token operator">?.</span>next <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7D22\u5F15\u7684\u524D\u4E00\u4E2A\u7D22\u5F15\u5143\u7D20</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5F53\u524D\u6307\u5411previous\u7684\u4E0B\u4E00\u4E2A</span>
        current <span class="token operator">=</span> previous<span class="token operator">?.</span>next
        <span class="token comment">// \u5207\u9664\u4E2D\u95F4\u7684\u5143\u7D20</span>
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token operator">?.</span>next
      <span class="token punctuation">}</span>

      <span class="token comment">// \u8BA1\u6570\u51CF\u4E00\u5E76\u8FD4\u56DE\u5F53\u524D\u5143\u7D20</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
      <span class="token keyword">return</span> current<span class="token operator">?.</span>element
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4E0D\u5408\u6CD5\u65F6\u8FD4\u56DEundefined</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> previous<span class="token operator">?.</span>next
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">&amp;&amp;</span> current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equalsFn</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> i

      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> objString
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6838\u5FC3\u65B9\u6CD5<code>push</code> <code>getElementAt</code> <code>removeAt</code> <code>insert</code></li></ul><h4 id="\u53CC\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CC\u5411\u94FE\u8868</h4><p>\u8282\u70B9\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DoublyNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Node<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> element<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> next<span class="token operator">?</span><span class="token operator">:</span> DoublyNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> prev<span class="token operator">?</span><span class="token operator">:</span> DoublyNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u7684\u76F8\u7B49\u5224\u65AD\u51FD\u6570\u53CA\u7C7B\u578B\u5B9A\u4E49</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">defaultEquals</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CC\u5411\u94FE\u8868\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">LinkdeList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> head<span class="token operator">:</span> DoublyNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token keyword">protected</span> tail<span class="token operator">:</span> DoublyNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">protected</span> equalsFn<span class="token operator">:</span> IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> defaultEquals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>

    <span class="token comment">// \u4E3A\u7A7A\u94FE\u8868</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>

      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u5C3E HEAD &lt;-&gt; B</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
          current<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5C3E B &lt;-&gt; TAIL</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        current<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> current
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4E2D\u95F4 A &lt;-&gt; B &lt;-&gt; C</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> previous<span class="token operator">?.</span>next
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
        current<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u5934</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">?.</span>next

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>

        <span class="token keyword">else</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5C3E</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> current<span class="token operator">?.</span>prev
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4E2D\u95F4</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> current<span class="token operator">?.</span>prev
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token operator">?.</span>next
        current<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
      <span class="token keyword">return</span> current<span class="token operator">!</span><span class="token punctuation">.</span>element
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equalsFn</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> index
      index<span class="token operator">++</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
  <span class="token punctuation">}</span>

  <span class="token function">getTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> objString
  <span class="token punctuation">}</span>

  <span class="token function">inverseToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev
    <span class="token keyword">while</span> <span class="token punctuation">(</span>previous <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>previous<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      previous <span class="token operator">=</span> previous<span class="token punctuation">.</span>prev
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> objString
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5FAA\u73AF\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u94FE\u8868" aria-hidden="true">#</a> \u5FAA\u73AF\u94FE\u8868</h4><p>\u5FAA\u73AF\u94FE\u8868\u5B58\u5728\u4E24\u79CD\uFF0C\u5355\u5411\u5FAA\u73AF\u94FE\u8868\u4EE5\u53CA\u53CC\u5411\u5FAA\u73AF\u94FE\u8868</p><p>\u5355\u5411\uFF1A <img src="`+t+`" alt="\u5355\u5411"></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CircularLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">LinkdeList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">protected</span> equalsFn<span class="token operator">:</span> IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> defaultEquals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
    <span class="token keyword">let</span> current

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      current<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u5934\u90E8\u63D2\u5165</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7A7A\u7684\u94FE\u8868</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token punctuation">}</span>
        <span class="token comment">// \u975E\u7A7A\u94FE\u8868</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
          <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
          current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          current<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5176\u4F59\u4F4D\u7F6E\u63D2\u5165</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> previous<span class="token operator">?.</span>next
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

      <span class="token comment">// \u5220\u9664\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4EC5\u4EC5\u5B58\u5728\u4E00\u4E2A\u5143\u7D20</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> removed <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">?.</span>next
          current<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          current <span class="token operator">=</span> removed
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5220\u9664\u5176\u4F59\u4F4D\u7F6E\u7684\u5143\u7D20</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> previous<span class="token operator">?.</span>next
        previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token operator">?.</span>next
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
      <span class="token keyword">return</span> current<span class="token operator">?.</span>element
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CC\u5411\uFF1A <img src="`+e+`" alt="\u53CC\u5411"></p><p>\u{1F602}\u4EE3\u7801\u5B9E\u73B0\u7565\u8FC7\uFF08\u4E0D\u662F\u5077\u61D2\u53EA\u662F\u89C9\u5F97\u5C06\u66F4\u591A\u7CBE\u529B\u6295\u5165\u5230\u540E\u9762\u7684\u5B66\u4E60\u66F4\u91CD\u8981\uFF09</p><h4 id="\u6709\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a> \u6709\u5E8F\u94FE\u8868</h4><p>\u9ED8\u8BA4\u6BD4\u8F83\u51FD\u6570\u4EE5\u53CA\u7C7B\u578B\u548C\u679A\u4E3E\u53D8\u91CF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ICompareFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> Compare <span class="token punctuation">{</span>
  <span class="token constant">LESS_THAN</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">BIGGER_THAN</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">EQUALS</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">defaultCompare</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Compare<span class="token punctuation">.</span><span class="token constant">EQUALS</span>

  <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> Compare<span class="token punctuation">.</span><span class="token constant">LESS_THAN</span> <span class="token operator">:</span> Compare<span class="token punctuation">.</span><span class="token constant">BIGGER_THAN</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u5E8F\u94FE\u8868</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SortedLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">LinkdeList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">protected</span> equalsFn<span class="token operator">:</span> IEqualsFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> defaultEquals<span class="token punctuation">,</span>
    <span class="token keyword">protected</span> compareFn<span class="token operator">:</span> ICompareFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> defaultCompare<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">getIndexNextSortedElement</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compareFn</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> current<span class="token punctuation">.</span>element<span class="token punctuation">)</span>
      <span class="token comment">// NOTE: \u8FD9\u91CC\u7684\u987A\u5E8F\u662F\u5C0F\u5230\u5927\uFF08\u53EF\u4EE5\u6539\u53D8\u8FD9\u91CC\u7684\u679A\u4E3E\u503C\u6539\u53D8\u6392\u5E8F\u987A\u5E8F\uFF09</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>comp <span class="token operator">===</span> Compare<span class="token punctuation">.</span><span class="token constant">LESS_THAN</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> i

      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> i
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getIndexNextSortedElement</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> index<span class="token punctuation">)</span>

    index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getIndexNextSortedElement</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u793A\u4F8B</h3><h4 id="\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\u6808" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\u6808" aria-hidden="true">#</a> \u4F7F\u7528\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\u6808</h4><p><span style="color:pink;">\u4E3A\u4EC0\u4E48\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u800C\u4E0D\u662F\u666E\u901A\u94FE\u8868\uFF1F</span> \u5C3E\u90E8\u7684\u63D2\u5165\u4EE5\u53CA\u5220\u9664\u64CD\u4F5C\u4E0D\u9700\u8981\u5FAA\u73AF\u94FE\u8868\u4E2D\u7684\u5143\u7D20\uFF0C\u56E0\u4E3Atail\u6307\u9488\u8BB0\u5F55\u4E86\u5BF9\u5E94\u7684\u4F4D\u7F6E\uFF0C\u53EA\u9700\u64CD\u4F5Ctail\u6307\u9488\u5C31\u597D\u4E86\uFF08\u65F6\u95F4\u590D\u6742\u5EA6 O(1)\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> items<span class="token operator">:</span> DoublyLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>element<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">getTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>element
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[c];function i(u,r){return s(),a("div",null,l)}const d=n(o,[["render",i],["__file","102201.html.vue"]]);export{d as default};
