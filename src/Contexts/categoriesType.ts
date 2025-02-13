export interface CategorieProps {
  id: number;
  name: string;
  color: string;
}

export interface CategorieContextType {
  categList: CategorieProps[];
}
