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