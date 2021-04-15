
// 可以mixin data , method ,computed property, watchers,lifecycle hooks
// 如果component里的 数据方法跟mixin里的数据方法有冲突，那么以component里的数据方法为准
export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      incrementCount() {
        this.count += 1
      }
    }
  }