## 😃😃😃演示地址：<a href="https://flex-box-4g13g81rf10ef474-1304393382.ap-shanghai.app.tcloudbase.com/" target="_blank">Flex容器属性演示</a>

`Flex`是`Flexible Box`的缩写，表示**弹性布局**，用来为盒子模型提供最大的灵活性。

任何一个容器都可以设定为`flex`布局：

```css
.box {
    display: flex;
}
```

设定为`flex`布局之后，**子元素**的`float`、`clear`和`vertical-align`属性将**失效**！

采用`flex`布局的容器叫作`flex`容器，简称**容器**。**容器**里的所有子元素成为`flex`项目，简称**项目**。

采用了`flex`布局以后，**容器**和**项目**分别有各自的属性。

为了更好地理解采用了`flex`布局后，**容器**不同属性的作用，我写了一个实时演示的小应用，可以很直观地演示**容器**的不同属性的作用。

上方代表**容器属性**，中间按钮表示**属性值**，下方是展示区。因为`flex-flow`是`flex-direction`属性和`flex-wrap`属性的连写方式（后文会介绍），故将`flex-direction`属性和`flex-wrap`属性放到了`flex-flow`下方。

![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210525164325.png)

接下来分别介绍各个容器属性、项目属性的作用。

# 1. 容器属性

## 1. flex-direction

`flex-direction`决定**主轴**的方向，有4种取值：

- `row`：默认，水平方向，**左→右**排列
- `row-reverse`：水平方向，**右→左**排列
- `column`：垂直方向，**上→下**排列
- `column-reverse`：垂直方向，**下→上**排列

## 2. flex-wrap

`flex-wrap`决定**项目**在一条轴线**排不下**时如何换行，有3种取值：

- `nowrap`：默认，不换行
- `wrap`：换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

## 3. flex-flow

`flex-flow`是`flex-direction`属性和`flex-wrap`属性的连写方式，相当于两个属性简写成一个属性了。

默认值：`flex-wrap: row nowrap;`

## 4. justify-content

`justify-content`定义**项目**在主轴上的**对齐方式**，有6种取值：

- `flex-start`：默认，左对齐（主轴水平）/上对齐（主轴垂直）

- `flex-end`：右对齐（主轴水平）/下对齐（主轴垂直）

- `center`：居中

- `space-between`：两端对齐，项目之间间隔相等

  ![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210525155422.png)

- `space-around`：每个**项目两侧间隔**相等

  ![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210525155727.png)

- `space-evenly`：每个**项目之间**及**两端**的间隔都相等

  ![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210525155331.png)

画得没那么标准，但应该能说明问题。使用<a href="http://47.110.144.145:81/" target="_blank">Flex容器属性演示</a>来动态展示一下，能更好理解。

## 5. align-items

`align-items`定义项目在交叉轴（默认方向从上到下）上的对齐方式，有5种取值：

- `flex-start`：交叉轴的**起点**对齐
- `flex-end`：交叉轴的**终点**对齐
- `center`：交叉轴的**中心**对齐
- `baseline`：项目第一行文字的基线对齐
- `stretch`：默认，项目未设置固定高度时，将被拉伸以适应容器

## 6. align-content

`align-content`定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用，有6种取值：

- `flex-start`：交叉轴的**起点**对齐
- `flex-end`：交叉轴的**终点**对齐
- `center`：交叉轴的**中心**对齐
- `space-between`：与**交叉轴两端**对齐，**轴线之间的间隔**平均分布等
- `space-around`：每根轴线两侧的间隔都相
- `stretch`：默认，轴线占满整个交叉轴

# 2. 项目属性

## 1. order

`order`定义项目的排列顺序。

值为**整数**，数值越小，排列越靠前，**默认为0**。

## 2. flex-grow

`flex-grow`定义项目的伸缩比例，按照该比例给项目分配空间。

值为**整数**，数值**越大**，项目占据空间**越大**，**默认为0**。

## 3. flex-shrink

`flex-shrink`定义项目的收缩比例，按照该比例给项目分配空间。

值为**整数**，数值**越大**，项目占据空间**越小**，**默认为1**。

## 4. flex-basis

`flex-basis`定义在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。

默认为`auto`，即项目的**原始尺寸**。

也可设置和`width`或`height`属性一样的值，则项目将占据**固定空间**。

## 5. flex

`flex`是`flex-grow`、`flex-shrink`、`flex-basis`的连写方式，相当于3个属性简写成一个属性了。

默认值：`flex: 0 1 auto;`不伸缩，如果容器空间不足则等比例收缩。

## 6. align-self

`align-self`定义**单个项目**的对齐方式，可覆盖`align-items`属性，有6种取值：

- `auto`：默认值，继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`
- `flex-start`：交叉轴的**起点**对齐
- `flex-end`：交叉轴的**终点**对齐
- `center`：交叉轴的**中心**对齐
- `baseline`：项目第一行文字的基线对齐
- `stretch`：未设置固定高度时，将占满整个容器