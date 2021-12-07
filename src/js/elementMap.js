import { defineAsyncComponent } from 'vue'

const formItemList = {
  elInput: defineAsyncComponent(() => import('@/widgets/FBInput.vue')),
  elSelect: defineAsyncComponent(() => import('@/widgets/FBSelect.vue')),
  elDate: defineAsyncComponent(() => import('@/widgets/FBDate.vue')),
  elDateGroup: defineAsyncComponent(() => import('@/widgets/FBDateGroup.vue')),
  elDateTime: defineAsyncComponent(() => import('@/widgets/FBDateTime.vue')),
  elTime: defineAsyncComponent(() => import('@/widgets/FBTime.vue')),
  elRadioBox: defineAsyncComponent(() => import('@/widgets/FBRadioBox.vue')),
  elRadioBorderBox: defineAsyncComponent(() => import('@/widgets/FBRadioBorderBox.vue')),
  elRadioButton: defineAsyncComponent(() => import('@/widgets/FBRadioButton.vue')),
  elCheckBox: defineAsyncComponent(() => import('@/widgets/FBCheckBox.vue')),
  elCheckBorderBox: defineAsyncComponent(() => import('@/widgets/FBCheckBorderBox.vue')),
  elOCR: defineAsyncComponent(() => import('@/widgets/FBOCR.vue')),
  elMail: defineAsyncComponent(() => import('@/widgets/FBMail.vue')),
  elCall: defineAsyncComponent(() => import('@/widgets/FBCall.vue')),
  

}

/**
 * 動態元件的字典，便於v-for迴圈裡面設定控制元件
 */
const formItemListKey = {
  1: formItemList.elInput, 
  2: formItemList.elSelect, 
  3: formItemList.elDate, 
  4: formItemList.elDateGroup, 
  5: formItemList.elDateTime, 
  6: formItemList.elTime, 
  7: formItemList.elRadioBox, 
  8: formItemList.elRadioBorderBox, 
  9: formItemList.elRadioButton, 
  10: formItemList.elCheckBox, 
  11: formItemList.elCheckBorderBox, 
  12: formItemList.elOCR, 
  13: formItemList.elMail, 
  14: formItemList.elCall, 


}

var fieldList = [
  { label:"姓名",
    id:"aa",
    errMsg:"這是必填",
    col:12,
    fieldType:1
  },
  { label:"手機",
    id:"bb",
    errMsg:"請填寫手機",
    col:12,
    fieldType:1
  },
  { label:"標題二",
    id:"cc",
    col:24,
    fieldType:1
  },
  { label:"地址",
    id:"dd",
    errMsg:"你家地址咧???",
    col:6,
    fieldType:2,
    option:[
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
    ]
  },
  { label:"國家",
    id:"ee",
    errMsg:"",
    col:6,
    fieldType:2,
    option:[
      {
        value: 'TW',
        label: '台灣',
      },
      {
        value: 'JP',
        label: '日本',
      },
    ]
  },
  { label:"生日",
    id:"ff",
    errMsg:"",
    col:6,
    fieldType:3,
  },
  { label:"起保日",
    id:"gg",
    errMsg:"",
    col:6,
    fieldType:3,
  },
  { label:"旅遊期間",
    id:"hh",
    errMsg:"",
    startId:"hh",
    endId:"ii",
    col:12,
    fieldType:4,
  },
  { label:"有效期間",
    id:"",
    errMsg:"",
    dateId:"jj",
    timeId:"kk",
    col:12,
    fieldType:5,
  },
  { label:"",
    id:"ll",
    errMsg:"",
    col:4,
    fieldType:24,
  },
  { label:"單選框",
    id:"mm",
    errMsg:"",
    col:24,
    fieldType:7,
    option:[
      {
        value: '1',
        label: '單選一',
      },
      {
        value: '2',
        label: '單選二',
      },
    ]
  },
  { label:"單選框",
  id:"nn",
  errMsg:"",
  col:24,
  fieldType:8,
  option:[
    {
      value: '1',
      label: '單選一',
    },
    {
      value: '2',
      label: '單選二',
    },
  ]
  },
  { label:"單選按鈕",
  id:"oo",
  errMsg:"",
  col:24,
  fieldType:9,
  option:[
    {
      value: 'a',
      label: '甜甜圈',
    },
    {
      value: 'b',
      label: '馬卡龍',
    },
  ]
  },
  { label:"多選框",
  id:"pp",
  errMsg:"",
  col:24,
  fieldType:10,
  option:[
    {
      value: 'a',
      label: '甜甜圈',
    },
    {
      value: 'b',
      label: '馬卡龍',
    },
    {
      value: 'c',
      label: '蛋糕',
    },
  ]
  },
  { label:"多選框",
  id:"qq",
  errMsg:"",
  col:24,
  fieldType:11,
  option:[
    {
      value: 'a',
      label: '甜甜圈',
    },
    {
      value: 'b',
      label: '馬卡龍',
    },
    {
      value: 'c',
      label: '蛋糕',
    },
  ]
  },
  { label:"OCR",
    id:"rr",
    errMsg:"",
    col:24,
    fieldType:12,
  },
  { label:"Email",
    id:"ss",
    errMsg:"",
    col:24,
    fieldType:13,
  },
  { label:"住家電話",
    id:"tt",
    errMsg:"",
    col:24,
    fieldType:14,
  },
  
  
 
]

export default {
  formItemList,
  formItemListKey,
  fieldList
}