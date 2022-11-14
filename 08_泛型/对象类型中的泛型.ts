interface IRes<TData = unknown> {
  code: number;
  error?: string;
  data: TData;
}
interface IUserProfileRes {
  name: string;
  homepage: string;
  avatar: string;
}

function fetchUserProfile(): Promise<IRes<IUserProfileRes>> {
  return new Promise();
}

type StatusSucceed = boolean;
function handleOperation(): Promise<IRes<StatusSucceed>> {}

// 泛型的嵌套
interface IPaginationRes<TItem = unknown> {
  data: TItem[];
  page: number;
  totalCount: number;
  hasNextPage: boolean;
}

function fetchUserProfileList(): Promise<
  IRes<IPaginationRes<IUserProfileRes>>
> {}
