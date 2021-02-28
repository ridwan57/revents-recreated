import { toastr } from "react-redux-toastr"

export const updateProfile = (user) => {
    console.log('user:', user)
    const { email, uid, dateOfBirth, displayName, isLoaded, isEmpty, createdAt, city, gender } = user
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const { isLoaded, isEmpty, ...updatedUser } = user
        try {

            const newUser = { email, uid, dateOfBirth, displayName, isLoaded, isEmpty, createdAt, city, gender }
            // await firebase.auth().updateCurrentUser(user)

            await firestore.set(`users/${uid}`, { ...user })

            // await firebase.auth().currentUser.updateProfile(user)
            toastr.success('Success', 'Your profile has been updated')
        } catch (error) {
            console.log('error:', error)

        }

    }
}
