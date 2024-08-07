---
title: Markdown 与数学公式
date: 2024-07-23 17:26:50
permalink: /Markdown/matn-block/
categories:
  - 效率软件
  - Markdown
tags:
  - 
feed:
  enable: true
description: 在写偏理科的文章的时候，多多少少会涉及到一些公式、函数的输入，本篇就来讲讲如何在 Markdown 中书写数学公式。

---

# 55.Markdown 与数学公式


在写偏理科的文章的时候，多多少少会涉及到一些公式、函数的输入，本篇就来讲讲如何在 Markdown 中书写数学公式。


‍<!-- more -->
‍
## 快速入门

直接看个例子，例如输入根号 2，语法为：

```md
\sqrt{2}
```


效果：

$$
\sqrt{2}
$$


### 常见运算符

|   作用    |          Markdown 代码           |              效果               |
| :-----: | :----------------------------: | :---------------------------: |
|   上标    |            ​`x^2`​             |         x<sup>2</sup>         |
|   下标    |            ​`y_1`​             |         y<sub>1</sub>         |
|   分式    |        ​`\frac{1}{2}`​         |        $\frac{1}{2}$​         |
|   省略号   |           ​`\cdots`​           |           $\cdots$​           |
|   矢量    |          ​`\vec{a}`​           |          $\vec{a}$​           |
|   积分    |         ​`\int{x}dx`​          |         $\int{x}dx$​          |
| 积分（带范围） |     ​`\int_{1}^{2}{x}dx`​      |     $\int_{1}^{2}{x}dx$​      |
|   极限    |         ​`\lim{a+b}`​          |         $\lim{a+b}$​          |
| 极限（带范围） | ​`\lim_{n\rightarrow+\infty}`​ | $\lim_{n\rightarrow+\infty}$​ |
|   累加    |          ​`\sum{a}`​           |          $\sum{a}$​           |
| 累加（带范围） |   ​`\sum_{n=1}^{100}{a_n}`​    |   $\sum_{n=1}^{100}{a_n}$​    |
|   累乘    |          ​`\prod{x}`​          |          $\prod{x}$​          |
| 累乘（带范围） |   ​`\prod_{n=1}^{99}{x_n}`​    |   $\prod_{n=1}^{99}{x_n}$​    |
|  向下取整   |     ​`\lfloor x \rfloor`​      |     $\lfloor x \rfloor$​      |
|  向上取整   |      ​`\lceil x \rceil`​       |      $\lceil x \rceil$​       |

‍

‍

‍

### 三角函数

| Markdown 代码 |  效果   |
| :-----------: | :-----: |
|   ​`\sin`​    | $\sin$​ |
|   ​`\cos`​    | $\cos$​ |

其他符号以此类推，就不一一列举了

‍

### 对数函数

‍

| Markdown 代码 |    效果    |
| :-----------: | :--------: |
|   ​`\ln2`​    |  $\ln2$​   |
|  ​`\log_28`​  | $\log_28$​ |
|   ​`\lg10`​   |  $\lg10$​  |

‍

### 关系运算符

|    说明    | Markdown 代码 |       效果       |
| :------: | :---------: | :------------: |
|   加减号    |   ​`\pm`​   |  $\pm$<br />   |
| 乘（或笛卡尔积） | ​`\times`​  |   $\times$​    |
|    点乘    |  ​`\cdot`​  |    $\cdot$​    |
|    除     |  ​`\div`​   |    $\div$​     |
|   不等号    |  ​`\neq`​   |    $\neq$​     |
|    等价    | ​`\equiv`​  | $\equiv$<br /> |
|   小于等于   |  ​`\leq`​   |    $\leq$​     |
|   大于等于   |  ​`\geq`​   |    $\geq$​     |
|    并集    |  ​`\cup`​   |  $\cup$<br />  |
|    交集    |  ​`\cap`​   |    $\cap$​     |
|          |             |                |

‍

### 其它特殊字符

‍

| Markdown 代码  |     效果     |
| :------------: | :----------: |
|  ​`\forall`​   |  $\forall$​  |
|   ​`\infty`​   |  $\infty$​   |
| ​`\emptyset`​  | $\emptyset$​ |
|  ​`\exists`​   |  $\exists$​  |
|   ​`\nabla`​   |  $\nabla$​   |
|    ​`\bot`​    |   $\bot$​    |
|   ​`\angle`​   |   $\angle$   |
|  ​`\because`​  |  $\because$  |
| ​`\therefore`​ | $\therefore$ |

‍

‍

### 空格，换行

示例：

```md
a \quad b
```

‍

效果：

$$
a \quad b
$$

‍

---

‍

也可以用一个斜线表示空格（注意反斜线后面要有空格）。语法：

```
a \  b
```

效果：

$$
a \  b
$$

‍

‍

‍

### 换行

用两个反斜线表示换行（注意两个反斜线后面要有空格）。示例：

```
1 + 1 = 2
\\ 
2 + 2 = 4
```

‍

效果：

$$
1 + 1 = 2
\\ 
2 + 2 = 4
$$

‍

> 注意：有些 Markdown 编辑器还未支持该语法，例如本博客使用的 MathJax。
>
> 我查了下文档，说是还未实现该功能，但是马上就会实现了。
>
> 文档地址：[Automatic Line Breaking — MathJax 3.2 documentation](https://docs.mathjax.org/en/latest/output/linebreaks.html)

‍

‍

### 花括号

‍

示例：

```md
c(u)=\begin{cases} \sqrt\frac{1}{N}, u=0\\ \sqrt\frac{2}{N}, u\neq0\end{cases}  
```

‍

效果：

‍

$$
c(u)=\begin{cases} \sqrt\frac{1}{N}, u=0\\ \sqrt\frac{2}{N}, u\neq0\end{cases}
$$

‍

‍

‍

### 希腊字母

| Markdown 代码 | 效果（大写） |null| Markdown 代码 | 效果（小写）|
| :-----------: | :----------: | --- | :-----------: | :-----------: |
|      `A`      |      A       |     |   `\alpha`    |   $\alpha$    |
|      `B`      |      B       |     |    `\beta`    |    $\beta$    |
|   `\Gamma`    |   $\Gamma$   |     |   `\gamma`    |   $\gamma$    |
|   `\Delta`    |   $\Delta$   |     |   `\delta`    |   $\delta$    |
|      `E`      |      E       |     |  `\epsilon`   |  $\epsilon$   |
|               |              |     | `\varepsilon` | $\varepsilon$ |
|      `Z`      |      Z       |     |    `\zeta`    |    $\zeta$    |
|      `H`      |      H       |     |    `\eta`     |    $\eta$     |
|   `\Theta`    |   $\Theta$   |     |   `\theta`    |   $\theta$    |
|      `I`      |      I       |     |    `\iota`    |    $\iota$    |
|      `K`      |      K       |     |   `\kappa`    |   $\kappa$    |
|   `\Lambda`   |  $\Lambda$   |     |   `\lambda`   |   $\lambda$   |
|      `M`      |      M       |     |     `\mu`     |     $\mu$     |
|      `N`      |      N       |     |     `\nu`     |     $\nu$     |
|     `\Xi`     |    $\Xi$     |     |     `\xi`     |     $\xi$     |
|      `O`      |      O       |     |  `\omicron`   |  $\omicron$   |
|     `\Pi`     |    $\Pi$     |     |     `\pi`     |     $\pi$     |
|      `P`      |      P       |     |    `\rho`     |    $\rho$     |
|   `\Sigma`    |   $\Sigma$   |     |   `\sigma`    |   $\sigma$    |
|      `T`      |      T       |     |    `\tau`     |    $\tau$     |
|  `\Upsilon`   |  $\Upsilon$  |     |  `\upsilon`   |  $\upsilon$   |
|    `\Phi`     |    $\Phi$    |     |    `\phi`     |    $\phi$     |
|               |              |     |   `\varphi`   |   $\varphi$   |
|      `X`      |      X       |     |    `\chi`     |    $\chi$     |
|    `\Psi`     |    $\Psi$    |     |    `\psi`     |    $\psi$     |
|   `\Omega`    |   $\Omega$   |     |   `\omega`    |   $\omega$    |

‍

‍

### 矩阵

‍

语法：

```md
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{matrix} \tag{1}
```

‍

‍

效果：

$$
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{matrix} \tag{1}
$$

‍

带括号的矩阵：

```md
\left[
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{matrix} \right]\tag{2}
```

‍

效果：

$$
\left[
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{matrix} \right]\tag{2}
$$

‍

‍

## Madoko

Markdown 和 Latex 代表了写作语言的两极：Markdown 追求极致的简洁，只有最少的格式控制；而 Latex 追求极致的可控，可以实现无限复杂的格式，也对语法有着严格的限制。

而这两极之间一直遗留着广阔的空白地带，是否有这样一种写作语言，在实现精美排版的同时，保持着足够的简洁和易用呢？Madoko 便是为了这一目的而生。

Madoko 是一款开源的在线编辑器，当然你也可以通过 Node 的方式本地安装并运行。

GitHub 地址：[https://github.com/koka-lang/madoko](https://github.com/koka-lang/madoko)

中文翻译：[https://github.com/HHpetra/MadokoReferenceChinese](https://github.com/HHpetra/MadokoReferenceChinese)

‍

‍

## 发布注意事项

有些平台不支持 LaTex，那么如果想要发布带有 LaTex 公式的博客到这些平台，就得先处理下，例如截图。

为此，有人做了一个工具，将 Markdown 中的 LaTeX 转化为本地图片，这个工具叫 mdtex，开源在 GitHub：[github.com/rreusser/mdtex-cli](https://github.com/rreusser/mdtex-cli)

具体步骤可以参考：[Markdown 一次编辑全平台发布方案，支持 LaTeX 公式！ - 知乎](https://zhuanlan.zhihu.com/p/65453006)

我用的博客框架是 VuePress，使用了插件 `markdown-it-mathjax3` 后能正常渲染出结果（例如本文的数学公式都能正常显示），具体步骤可以参考我的另一篇博客：[显示数学公式块](/Blog/Vuepress-Latex/)
‍

‍

## 参考资料

107 页的PDF 文件：[“一份不太简短的 LATEX2e 介绍”](http://www.mohu.org/info/lshort-cn.pdf) 3.1 节 数学公式

‍
