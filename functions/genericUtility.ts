function pickProperty<ObjType extends number[]>(obj : ObjType, prop : keyof ObjType | null){
    console.log(obj)
}
pickProperty([1,2,3,4], null)