/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type SimpleDiscriminator = SimpleObject | ComplexObject;

export interface SimpleObject {
  objectType: string;
}

export interface ComplexObject {
  objectType: string;
}

export type BlockDTO =
  | AbstractBlockDto
  | (CsvBlockDTO | FileBlockDTO)
  | (
      | ({
          type: "csv";
        } & CsvBlockDTO)
      | ({
          type: "file";
        } & FileBlockDTO)
    );

export type CsvBlockDTO = BlockDTO & {
  /** @default "csv" */
  type: "csv";
  text: string;
};

export type FileBlockDTO = BlockDTO & {
  /** @default "file" */
  type: "file";
  fileId: string;
};

export type Pet =
  | AbstractPet
  | (
      | ({
          pet_type: "cachorro";
        } & Dog)
      | ({
          pet_type: "cat";
        } & Cat)
    );

export type Cat = Pet & {
  name?: string;
};

export type Dog = Pet & {
  bark?: string;
};

export type Lizard = Pet & {
  lovesRocks?: boolean;
};

interface AbstractBlockDto {
  title: string;
}

interface AbstractPet {
  pet_type: string;
}