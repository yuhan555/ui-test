import { defineAsyncComponent } from 'vue'

const formItemList = {
  elInput: defineAsyncComponent(() => import('@/components/YellowInput.vue')),
  elButton: defineAsyncComponent(() => import('@/components/RedButton.vue')),
  elSelecter: defineAsyncComponent(() => import('@/components/Selecter.vue')),

}

/**
 * 動態元件的字典，便於v-for迴圈裡面設定控制元件
 */
const formItemListKey = {
  1: formItemList.elInput, 
  2: formItemList.elButton, 
  3: formItemList.elSelecter,
}

var fieldList = [
  { label:"姓名",
    errMsg:"這是必填",
    col:12,
    fieldType:1
  },
  { label:"生日",
    errMsg:"這是必填!!!!!",
    col:12,
    fieldType:1
  },
  { label:"電話",
    col:16,
    fieldType:1
  },
  { label:"這是按鈕",
    col:8,
    fieldType:2
  },
  { label:"手機",
    errMsg:"請填寫",
    col:10,
    fieldType:1
  },
  { label:"Email",
    errMsg:"",
    col:14,
    fieldType:1
  },
  { label:"地址",
    errMsg:"你家地址咧???",
    col:6,
    fieldType:3,
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
]

export default {
  formItemList,
  formItemListKey,
  fieldList
}