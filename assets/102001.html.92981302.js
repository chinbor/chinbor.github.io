import{_ as s,o as a,c as t,b as n,e as p,a as e}from"./app.9376a9a7.js";const o={},c=n("h2",{id:"\u6808",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6808","aria-hidden":"true"},"#"),p(" \u6808")],-1),i=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"\u6211\u771F\u7684\u597D\u83DC\u554A")],-1),l=e(`<h3 id="\u6570\u636E\u7ED3\u6784\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784\u5B9E\u73B0" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784\u5B9E\u73B0</h3><h4 id="o-n-\u65F6\u95F4\u590D\u6742\u5EA6-\u6570\u7EC4\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#o-n-\u65F6\u95F4\u590D\u6742\u5EA6-\u6570\u7EC4\u5B9E\u73B0" aria-hidden="true">#</a> O(n)\u65F6\u95F4\u590D\u6742\u5EA6\uFF08\u6570\u7EC4\u5B9E\u73B0\uFF09</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> items<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="o-1-\u65F6\u95F4\u590D\u6742\u5EA6-\u5BF9\u8C61key-value\u5B9E\u73B0-\u5176\u5B9E\u5C31\u662F\u5934\u6307\u9488count\u8BB0\u5F55\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#o-1-\u65F6\u95F4\u590D\u6742\u5EA6-\u5BF9\u8C61key-value\u5B9E\u73B0-\u5176\u5B9E\u5C31\u662F\u5934\u6307\u9488count\u8BB0\u5F55\u4F4D\u7F6E" aria-hidden="true">#</a> O(1)\u65F6\u95F4\u590D\u6742\u5EA6\uFF08\u5BF9\u8C61<code>key-value</code>\u5B9E\u73B0\uFF0C\u5176\u5B9E\u5C31\u662F\u5934\u6307\u9488<code>count</code>\u8BB0\u5F55\u4F4D\u7F6E\uFF09</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> items<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token keyword">private</span> count<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> ele
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
      objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">return</span> objString
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u793A\u4F8B</h3><h4 id="\u4EE5\u4EFB\u610Fbase-2-36\u8FDB\u5236-\u4E3A\u57FA\u51C6\u8F6C\u636210\u8FDB\u5236\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4EFB\u610Fbase-2-36\u8FDB\u5236-\u4E3A\u57FA\u51C6\u8F6C\u636210\u8FDB\u5236\u6570\u5B57" aria-hidden="true">#</a> \u4EE5\u4EFB\u610Fbase\uFF082 ~ 36\u8FDB\u5236\uFF09\u4E3A\u57FA\u51C6\u8F6C\u636210\u8FDB\u5236\u6570\u5B57</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">baseConverter</span><span class="token punctuation">(</span>decNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> base<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> remStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 2\u8FDB\u5236\u4F59\u6570\u53EA\u80FD\u662F 0 | 1\uFF0C3\u8FDB\u5236\u4F59\u6570\u53EA\u80FD\u662F 0 | 1 | 2\uFF0C\u4EE5\u6B64\u7C7B\u63A8</span>
  <span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">&#39;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>

  <span class="token keyword">let</span> <span class="token builtin">number</span> <span class="token operator">=</span> decNumber
  <span class="token keyword">let</span> rem
  <span class="token keyword">let</span> binaryString <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>base <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> base <span class="token operator">&lt;=</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rem <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">%</span> base<span class="token punctuation">)</span>
    remStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rem<span class="token punctuation">)</span>
    <span class="token builtin">number</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">/</span> base<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>remStack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    binaryString <span class="token operator">+=</span> digits<span class="token punctuation">[</span>remStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

  <span class="token keyword">return</span> binaryString
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u62EC\u53F7\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u62EC\u53F7\u5339\u914D" aria-hidden="true">#</a> \u62EC\u53F7\u5339\u914D</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">parenthesesChecker</span><span class="token punctuation">(</span>symbols<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> opens <span class="token operator">=</span> <span class="token string">&#39;({[&#39;</span>
  <span class="token keyword">const</span> closers <span class="token operator">=</span> <span class="token string">&#39;)}]&#39;</span>
  <span class="token keyword">let</span> balanced <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">let</span> top<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> symbols<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> balanced<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">symbol</span> <span class="token operator">=</span> symbols<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>opens<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token builtin">symbol</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token builtin">symbol</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> balanced <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        top <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>opens<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token operator">===</span> closers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token builtin">symbol</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          balanced <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    index<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// NOTE: stack.isEmpty() \u56E0\u4E3A \u7C7B\u4F3C\u4E8E\u8F93\u5165 &#39;(&#39; \u5219stack\u4E0D\u4E3A\u7A7A\u4E14balanced\u4E3Atrue</span>
  <span class="token keyword">return</span> balanced <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6C49\u8BFA\u5854-\u672A\u63CF\u8FF0\u8BE6\u7EC6\u8FC7\u7A0B-1\u53F7\u76D8-2\u53F7\u76D8-3\u53F7\u76D8" tabindex="-1"><a class="header-anchor" href="#\u6C49\u8BFA\u5854-\u672A\u63CF\u8FF0\u8BE6\u7EC6\u8FC7\u7A0B-1\u53F7\u76D8-2\u53F7\u76D8-3\u53F7\u76D8" aria-hidden="true">#</a> <span style="color:pink;">\u6C49\u8BFA\u5854\uFF08\u672A\u63CF\u8FF0\u8BE6\u7EC6\u8FC7\u7A0B\uFF081\u53F7\u76D8\uFF0C2\u53F7\u76D8\uFF0C3\u53F7\u76D8...\uFF09\uFF09</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hanoi</span><span class="token punctuation">(</span>
  plates<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  helper<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  dest<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  moves<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>plates <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> moves

  <span class="token keyword">if</span> <span class="token punctuation">(</span>plates <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    moves<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>source<span class="token punctuation">,</span> dest<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">hanoi</span><span class="token punctuation">(</span>plates <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> source<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> helper<span class="token punctuation">,</span> moves<span class="token punctuation">)</span>
    moves<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>source<span class="token punctuation">,</span> dest<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">hanoi</span><span class="token punctuation">(</span>plates <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> helper<span class="token punctuation">,</span> source<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> moves<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> moves
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528moves\u6570\u7EC4\u5B58\u50A8\u6BCF\u6B21\u7684\u8FC7\u7A0B</li><li>\u9012\u5F52\u6267\u884C</li></ul><p>\u4EE3\u7801\u786E\u5B9E\u4E0D\u662F\u5F88\u597D\u770B\u660E\u767D\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u6253\u65AD\u70B9\u8FDB\u884C\u8C03\u8BD5\uFF0C\u4F7F\u7528 <code>vitest</code>\u7684<code>toMatchInlineSnapshot</code>\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">hanoi</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchInlineSnapshot</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  [
    [
      &quot;A&quot;,
      &quot;C&quot;,
    ],
    [
      &quot;A&quot;,
      &quot;B&quot;,
    ],
    [
      &quot;C&quot;,
      &quot;B&quot;,
    ],
    [
      &quot;A&quot;,
      &quot;C&quot;,
    ],
    [
      &quot;B&quot;,
      &quot;A&quot;,
    ],
    [
      &quot;B&quot;,
      &quot;C&quot;,
    ],
    [
      &quot;A&quot;,
      &quot;C&quot;,
    ],
  ]
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528stack\u65B9\u5F0F\u89E3\u51B3\u6C49\u8BFA\u5854" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528stack\u65B9\u5F0F\u89E3\u51B3\u6C49\u8BFA\u5854" aria-hidden="true">#</a> <span style="color:pink;">\u4F7F\u7528stack\u65B9\u5F0F\u89E3\u51B3\u6C49\u8BFA\u5854</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">towerOfHanoi</span><span class="token punctuation">(</span>
  plates<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  source<span class="token operator">:</span> Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  helper<span class="token operator">:</span> Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  dest<span class="token operator">:</span> Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  sourceName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> helperName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> destName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  moves<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>plates <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> moves

  <span class="token keyword">if</span> <span class="token punctuation">(</span>plates <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dest<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> move<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    move<span class="token punctuation">[</span>sourceName<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    move<span class="token punctuation">[</span>helperName<span class="token punctuation">]</span> <span class="token operator">=</span> helper<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    move<span class="token punctuation">[</span>destName<span class="token punctuation">]</span> <span class="token operator">=</span> dest<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    moves<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">towerOfHanoi</span><span class="token punctuation">(</span>plates <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> source<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> helper<span class="token punctuation">,</span> sourceName<span class="token punctuation">,</span> destName<span class="token punctuation">,</span> helperName<span class="token punctuation">,</span> moves<span class="token punctuation">)</span>
    dest<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> move<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    move<span class="token punctuation">[</span>sourceName<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    move<span class="token punctuation">[</span>helperName<span class="token punctuation">]</span> <span class="token operator">=</span> helper<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    move<span class="token punctuation">[</span>destName<span class="token punctuation">]</span> <span class="token operator">=</span> dest<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    moves<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span>
    <span class="token function">towerOfHanoi</span><span class="token punctuation">(</span>plates <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> helper<span class="token punctuation">,</span> source<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> helperName<span class="token punctuation">,</span> sourceName<span class="token punctuation">,</span> destName<span class="token punctuation">,</span> moves<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> moves
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hanoiStack</span><span class="token punctuation">(</span>plates<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> plates<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
    source<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">towerOfHanoi</span><span class="token punctuation">(</span>plates<span class="token punctuation">,</span> source<span class="token punctuation">,</span> helper<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> <span class="token string">&#39;source&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;helper&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dest&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:pink;">\u4EBA\u7684\u601D\u7EF4\u65B9\u5F0F\u90FD\u662F\u7EBF\u6027\u5F80\u524D\u8FDB\u884C\u7684\uFF0C\u5BF9\u4E8E\u524D\u9762\u7684\u5185\u5BB9\u8BB0\u5FC6\u90FD\u662F\u77ED\u6682\u7684\uFF0C\u6240\u4EE5\u9700\u8981debug\u5DE5\u5177\u5E2E\u52A9\u6211\u4EEC\u4EE5\u53EF\u89C6\u5316\u7684\u65B9\u5F0F\u8BB0\u5FC6\u524D\u9762\u7684\u6B65\u9AA4\u6240\u4EA7\u751F\u7684\u503C\u3002\u8FD9\u6837\u6211\u4EEC\u624D\u80FD\u57FA\u4E8E\u8FD9\u4E9B\u5185\u5BB9\u7EA0\u6B63\u4EE3\u7801\u7684\u7F16\u5199\u65B9\u5F0F\u76F4\u5230\u8C03\u8BD5\u51FA\u6B63\u786E\u7ED3\u679C\uFF0C\u53EF\u89C1\uFF0C\u524D\u4EBA\u5BF9\u4E8E\u8FD9\u4E00\u7B97\u6CD5\u7684\u5B9E\u73B0\u662F\u82B1\u4E86\u591A\u5C11\u65F6\u95F4\u4EE5\u53CA\u591A\u5C11\u601D\u8003\uFF01</span></p><p>\u8F85\u52A9\u8BB0\u5FC6</p><ul><li>\u4F7F\u75283\u4E2A\u6808\u6570\u636E\u7ED3\u6784\u4EE3\u8868\u67F1\u5B50\u6765\u5B58\u50A8\u4E0D\u540C\u7684\u76D8\u5B50\uFF08\u76D8\u5B50\u8FDB\u884C\u4E86\u7F16\u53F7\uFF09</li><li>\u4F7F\u7528\u9012\u5F52\uFF08\u9012\u5F52\u9700\u8981\u6709\u4E2D\u6B62\u6761\u4EF6\uFF0C\u4E14\u6CE8\u610F\u8FD9\u91CC\u7684\u9012\u5F52\u8C03\u7528\u65F6\u53C2\u6570\u7684\u4F4D\u7F6E\u662F\u53D1\u751F\u66FF\u6362\u4E86\uFF09</li></ul><p>\u4F7F\u7528 <code>vitest</code>\u7684<code>toMatchInlineSnapshot</code>\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">hanoiStack</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchInlineSnapshot</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  [
    {
      &quot;dest&quot;: &quot;1&quot;,
      &quot;helper&quot;: &quot;&quot;,
      &quot;source&quot;: &quot;3,2&quot;,
    },
    {
      &quot;dest&quot;: &quot;1&quot;,
      &quot;helper&quot;: &quot;2&quot;,
      &quot;source&quot;: &quot;3&quot;,
    },
    {
      &quot;dest&quot;: &quot;&quot;,
      &quot;helper&quot;: &quot;2,1&quot;,
      &quot;source&quot;: &quot;3&quot;,
    },
    {
      &quot;dest&quot;: &quot;3&quot;,
      &quot;helper&quot;: &quot;2,1&quot;,
      &quot;source&quot;: &quot;&quot;,
    },
    {
      &quot;dest&quot;: &quot;3&quot;,
      &quot;helper&quot;: &quot;2&quot;,
      &quot;source&quot;: &quot;1&quot;,
    },
    {
      &quot;dest&quot;: &quot;3,2&quot;,
      &quot;helper&quot;: &quot;&quot;,
      &quot;source&quot;: &quot;1&quot;,
    },
    {
      &quot;dest&quot;: &quot;3,2,1&quot;,
      &quot;helper&quot;: &quot;&quot;,
      &quot;source&quot;: &quot;&quot;,
    },
  ]
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),u=[c,i,l];function r(k,d){return a(),t("div",null,u)}const m=s(o,[["render",r],["__file","102001.html.vue"]]);export{m as default};
