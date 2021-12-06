import { defineAsyncComponent } from 'vue'

const formItemList = {
  elInput: defineAsyncComponent(() => import('@/widgets/FBInput.vue')),
  elSelect: defineAsyncComponent(() => import('@/widgets/FBSelect.vue')),
  elDate: defineAsyncComponent(() => import('@/widgets/FBDate.vue')),
  elDateGroup: defineAsyncComponent(() => import('@/widgets/FBDateGroup.vue')),
  elDateTime: defineAsyncComponent(() => import('@/widgets/FBDateTime.vue')),
  

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
  // { label:"這是按鈕",
  //   col:8,
  //   fieldType:2
  // },
  // { label:"Email",
  //   errMsg:"",
  //   col:14,
  //   fieldType:1
  // },
 
]

export default {
  formItemList,
  formItemListKey,
  fieldList
}