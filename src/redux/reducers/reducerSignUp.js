import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    OPEN_DROPZONE_MODAL,
    CLOSE_DROPZONE_MODAL
} from 'constants/actionsConstants';

const initialState = {
    errorLogin: '',
    errorEmail: '',
    errorPassword: '',
    success: false,
    isOpen: false,
    uploadedFile: null,
    uploadedFileCloudinaryUrl: ''
};

export default function reducerSignUp(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {errorEmail: '', errorLogin: '', errorPassword: '', success: true});

        case SIGN_UP_FAILURE:
            return  Object.assign({}, state, {errorEmail: action.payload[0], errorLogin: action.payload[1], errorPassword: action.payload[2], success: false});

        case OPEN_DROPZONE_MODAL:
            return Object.assign({}, state, {
                isOpen: true
            });

        case CLOSE_DROPZONE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });

        default:
            return state
    }
}
