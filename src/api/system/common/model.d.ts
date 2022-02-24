declare namespace API {
    type MenuListResultItem = {
      createTime: string;
      updatedAt: string;
      id: number;
      parentId: number;
      name: string;
      router: string;
      perms: string;
      type: number;
      icon: string;
      orderNum: number;
      viewPath: string;
      keepalive: boolean;
      isShow: boolean;
      keyPath?: number[];
    };
  }
  