# Custom Accordian
create a accordian on the go by just passing JSON

 # Installation

`npm i custom-accordian`

Then ...

```
const data = {
  Header1: {
    accordianContent: [
      {
        title: "Header1 Content 1",
      },
    ],
  },
  Header2: {
    accordianContent: [
      {
        title: "Haeder2 Content 1",
      },
      {
        title: "Haeder2 Content 2",
      },
    ],
  },
};
```

```
import {  CustomAccordian } from "custom-accordian";

<CustomAccordian
    data={data}
    bgColor="#333333"
    headerBgColor="lightblue"
    fontSize="15px"
    lineColor="blue"
    color="yellow"
    headerHeight="28px"
/>
```

![image](https://github.com/aqu9/Custom-Accordian/assets/67313757/ae8d8d2b-e705-4cd7-87c9-9c210af157b7)




## Nested Accordian

```
const nested_data = {
  Header1: {
    accordianContent: [
      {
        title: "Header1 Content 1",
      },
      {
        title: "Header1 content 2",
        isChildren: true,
        children: {
          child1: {
            accordianContent: [
              {
                title: "child 1 content 1",
              },
              {
                title: "child 1 content 2",
              },
              {
                title: "child 1 content 3",
              },
            ],
          },
          child2: {
            accordianContent: [
              {
                title: "child 2 content 1",
              },
            ],
          },
        },
      },
      {
        title: "Header1 content 3",
      },
    ],
  },
  Header2: {
    accordianContent: [
      {
        title: "Haeder2 Content 1",
        component: <div>Component</div>,
      },
      {
        title: "Haeder2 Content 2",
      },
    ],
  },
};
```

```
import {  CustomAccordian } from "custom-accordian";

<CustomAccordian
    data={nested_data}
    bgColor="#333333"
    headerBgColor="lightblue"
    fontSize="15px"
    lineColor="blue"
    color="yellow"
    headerHeight="28px"
/>

```
![image](https://github.com/aqu9/Custom-Accordian/assets/67313757/99a1cb9c-0f96-4686-a64d-9691e149e68a)


# Props options
* *data* - JSON
* *bgColor* - string
* *headerBgColor* - string
* *fontsize* - string
* *fontWeight* - string | number
* *lineColor* - string
* *color* - string
* *headerHeight* - string
* *removeIcon* - react componnet
* *addIcon* - react component

 
