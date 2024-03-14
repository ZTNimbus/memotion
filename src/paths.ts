const paths = {
  home: () => "/",

  life: () => "/life",

  newMemo: () => "/life/new",

  editMemo: (memoId: string) => `/life/new/${memoId}`,

  settings: () => `/life/settings`,

  billing: () => `/life/billing`,
};

export default paths;
