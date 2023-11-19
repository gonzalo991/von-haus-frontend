import { IconType } from "react-icons"

export interface PaginationProps {
    totalDePaginas: number,
    currentPage: number,
    handleGoToPage: (page: number) => void,
    handlePreviousPage: () => void,
    handleNextPage: () => void
}

export interface SideBarMenuItem {
    id: string,
    label: string,
    icon: IconType,
    url: string
}

export interface SideBarMenuCard {
    id: string,
    displayName: string,
    photo: string,
    title: string
}

export interface EditArticleProps {
    _id: number;
    data: FormData;
}

export interface DeleteArticlePops {
    _id: number
}