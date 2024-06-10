export interface CreateGigoloState {
    errors: {
        firstName?: string[]
        lastName?: string[]
        umur?: string[]
        _form?: string[]
    },
    submitSuccess?: boolean
}

export interface EditGigoloState {
    errors: {
        firstName?: string[]
        lastName?: string[]
        umur?: string[]
        _form?: string[]
    }
}

export interface CreateTalentState {
    errors: {
        name?: string[],
        umur?: string[],
        imgUrl?: string[],
        desc?: string[],
        apalah?: string[],
        _form?: string[]
    },
    submitSuccess?: boolean
}

export type SearchParamProps = {
    params?: { id: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}