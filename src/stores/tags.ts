import { defineStore } from 'pinia'

export const useTagsStore = defineStore({
  id: 'tags',
  state: () => ({
    tagsList: <any>[],
    collapse: false
  }),
  getters: {
    gettagsList: (state) => state.tagsList,
    getcollapse: (state) => state.collapse,
  },
  actions: {
    delTagsItem(data:any) {
      this.tagsList.splice(data, 1);
    },
    setTagsItem(data:any){
        this.tagsList.push(data)
    },
    clearTags() {
        this.tagsList = []
    },
    closeTagsOther( data:any) {
        this.tagsList = data;
    },
    closeCurrentTag( data:any) {
        for (let i = 0, len = this.tagsList.length; i < len; i++) {
            const item:any = this.tagsList[i];
            if (item.path === data.$route.fullPath) {
                if (i < len - 1) {
                    data
                        .$router
                        .push(this.tagsList[i + 1].path);
                } else if (i > 0) {
                    data
                        .$router
                        .push(this.tagsList[i - 1].path);
                } else {
                    data
                        .$router
                        .push("/");
                }
                this
                    .tagsList
                    .splice(i, 1);
                break;
            }
        }
    },
    handleCollapse(data:boolean){
        this.collapse = data
    }
  }
})
