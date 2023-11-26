import { atom } from "jotai";
import {
	DefectType,
	Defects,
	PackagingType,
	Places,
	Products,
} from "../../../types/defects";

export const toEncodeAtom = atom<Array<Defects>>([]);

export const formDataAtom = atom<{
	defectTypes: Array<DefectType>;
	packaging: Array<PackagingType>;
	places: Array<Places>;
	products: Array<Products>;
}>({
	defectTypes: [],
	packaging: [],
	places: [],
	products: [],
});
