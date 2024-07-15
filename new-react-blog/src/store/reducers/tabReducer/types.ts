type ActiveTabType = "All" | "My Favorites" | "My Posts";
interface ITabType {
    id: number;
    name: ActiveTabType;
}
interface IDefaultState {
    tabs: ITabType[];
    activeTab: ActiveTabType;
}
interface ISetActiveTabAction {
    type: string;
    activeTab: ActiveTabType;
}

export type { ActiveTabType, ITabType, IDefaultState, ISetActiveTabAction };