//for enzyme testing, finds component with a certain attribute
export const FindByTestAttr = (wrapper:any, val:any) => {
    return wrapper.find(`[data-test="${val}"]`);
}
