export type DomainType = "open" | "closed";

export interface DomainNft {
  readonly name: string;
  /** Bech32 account address */
  readonly admin: string;
  /** Bech32 account address */
  readonly broker: string;
  readonly type: DomainType;
  readonly valid_until: number;
}
