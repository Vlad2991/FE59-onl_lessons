interface IDefaultState {
    firstPage: number;
    currentPage: number;
    lastPage: number;
  }
  
  interface IGetOverallPagesPostsOverallCountAction {
    type: string;
    lastPage: number;
  }
  
  export type { IDefaultState, IGetOverallPagesPostsOverallCountAction };