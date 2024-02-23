export interface Az101TabInfo {
  tabId: string;
  screenUrl: string;
  selected: boolean;
  name: string;
}

export let az101TabInfoBlank: Az101TabInfo = {
  tabId: '',
  screenUrl: '',
  selected: false,
  name: '',
};
