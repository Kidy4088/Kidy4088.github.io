(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{610:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本数据类型"}},[t._v("#")]),t._v(" 1. 基本数据类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Hive 数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Java 数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("byte")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1byte 有符号整数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SMALINT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("short")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2byte有符号整数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4byte有符号整数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("long")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("8byte有符号整数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("布尔类型，true或者false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("TRUE FALSE")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("float")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单精度浮点数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3.14159")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("double")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("双精度浮点数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3.14159")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("字符系列。可以指定字符集。可以使用单引号或者双引号。")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘now is the time’ “for all good men”")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("时间类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("BINARY")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("字节数组")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("对于Hive的String类型相当于数据库的varchar类型，该类型是一个可变的字符串，不过它不能声明其中最多能存储多少个字符，理论上它可以存储2GB的字符数。")]),t._v(" "),s("h2",{attrs:{id:"_2-集合数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-集合数据类型"}},[t._v("#")]),t._v(" 2. 集合数据类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("语法示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("STRUCT")]),t._v(" "),s("td",[t._v("和c语言中的struct类似，都可以通过“点”符号访问元素内容。例如，如果某个列的数据类型是STRUCT{first STRING, last STRING},那么第1个元素可以通过字段.first来引用。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("struct()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("MAP")]),t._v(" "),s("td",[t._v("MAP是一组键-值对元组集合，使用数组表示法可以访问数据。例如，如果某个列的数据类型是MAP，其中键->值对是’first’->’John’和’last’->’Doe’，那么可以通过字段名[‘last’]获取最后一个元素")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("map()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ARRAY")]),t._v(" "),s("td",[t._v("数组是一组具有相同类型和名称的变量的集合。这些变量称为数组的元素，每个数组元素都有一个编号，编号从零开始。例如，数组值为[‘John’, ‘Doe’]，那么第2个元素可以通过数组名[1]进行引用。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array()")])])])]),t._v(" "),s("p",[t._v("Hive 有三种复杂数据类型 ARRAY、MAP 和 STRUCT。ARRAY 和 MAP 与 Java 中的Array 和 Map 类似，而 STRUCT 与 C 语言中的 Struct 类似，它封装了一个命名字段集合，复杂数据类型允许任意层次的嵌套。")]),t._v(" "),s("p",[t._v("案例:")]),t._v(" "),s("ol",[s("li",[t._v("假设某表有如下一行，我们用 JSON 格式来表示其数据结构。在 Hive 下访问的格式为")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"momo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"friends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lwz"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hzf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//列表 Array")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"children"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//键值 Map")]),t._v("\n \t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uud"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"liliya"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结构 Struct")]),t._v("\n \t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"street"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"******"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"深圳"')]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("基于上述数据结构，我们在 Hive 里创建对应的表，并导入数据。创建本地测试文件 test.txt")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("momo,lwz_hzf,uud:19_liliya:21,******_深圳\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"},[t._v("注意")]),s("p",[t._v('MAP，STRUCT 和 ARRAY 里的元素间关系都可以用同一个字符表示，这里用"_"。')])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Hive 上创建测试表 test")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("create table test(\nname string,\nfriends array<string>,\nchildren map<string, int>,\naddress struct<street:string, city:string>\n)\nrow format delimited \nfields terminated by ','\ncollection items terminated by '_'\nmap keys terminated by ':'\nlines terminated by '\\n';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("字段解释")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("row format delimited \nfields terminated by ',' \t-- 列分隔符\ncollection items terminated by '_'\t--MAP STRUCT 和 ARRAY 的分隔符(数据分割符号)\nmap keys terminated by ':'\t\t\t-- MAP中的key与value的分隔符\nlines terminated by '\\n';\t\t\t-- 行分隔符\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("具体操作")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 创建表\nhive (default)> create table test(\n              > name string,\n              > friends array<string>,\n              > children map<string, int>,\n              > address struct<street:string, city:string>\n              > )\n              > row format delimited \n              > fields terminated by ','\n              > collection items terminated by '_'\n              > map keys terminated by ':'\n              > lines terminated by '\\n';\nOK\nTime taken: 0.8 seconds\n// 查看表结构\nhive (default)> desc test;\nOK\ncol_name\tdata_type\tcomment\nname                \tstring              \t                    \nfriends             \tarray<string>       \t                    \nchildren            \tmap<string,int>     \t                    \naddress             \tstruct<street:string,city:string>\t                    \nTime taken: 0.102 seconds, Fetched: 4 row(s)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("导入文本数据到测试表")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hive (default)> load data local inpath '/opt/module/data/test.txt' into table test;\nLoading data to table default.test\nTable default.test stats: [numFiles=1, totalSize=44]\nOK\nTime taken: 0.891 seconds\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("访问三种集合列里的数据，以下分别是 ARRAY，MAP，STRUCT 的访问方式")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hive (default)> select friends[1],children['uud'],address.city from test where name=\"momo\";\nOK\n_c0\t_c1\tcity\nhzf\t19\t深圳\nTime taken: 0.739 seconds, Fetched: 1 row(s)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"_3-类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型转换"}},[t._v("#")]),t._v(" 3. 类型转换")]),t._v(" "),s("p",[t._v("Hive 的原子数据类型是可以进行隐式转换的，类似于 Java 的类型转换，例如某表达式使用 INT 类型，TINYINT 会自动转换为 INT 类型，但是 Hive 不会进行反向转化，例如，某表达式使用 TINYINT 类型，INT 不会自动转换为 TINYINT 类型，它会返回错误，除非使用 CAST 操作。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-隐式类型转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-隐式类型转换规则"}},[t._v("#")]),t._v(" 3.1 隐式类型转换规则")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("任何整数类型都可以隐式地转换为一个范围更广的类型，如 TINYINT 可以转换 成 INT，INT 可以转换成 BIGINT。")])]),t._v(" "),s("li",[s("p",[t._v("所有整数类型、FLOAT 和 STRING 类型都可以隐式地转换成 DOUBLE。")])]),t._v(" "),s("li",[s("p",[t._v("TINYINT、SMALLINT、INT 都可以转换为 FLOAT。")])]),t._v(" "),s("li",[s("p",[t._v("BOOLEAN 类型不可以转换为任何其它的类型。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-使用-cast-操作显示进行数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用-cast-操作显示进行数据类型转换"}},[t._v("#")]),t._v(" 3.2 使用 CAST 操作显示进行数据类型转换")]),t._v(" "),s("p",[t._v("例如 CAST('1' AS INT)将把字符串'1' 转换成整数 1；如果强制类型转换失败，如执行CAST('X' AS INT)，表达式返回空值 NULL。")])])}),[],!1,null,null,null);e.default=n.exports}}]);