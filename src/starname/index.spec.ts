import { Decimal } from "@cosmjs/math";

import { FeesRaw, wrapFees } from "../types/Fees";

describe("Fees", () => {
  it("should wrap raw fees object into internal one", () => {
    const rawFees: FeesRaw = {
      fee_coin_denom: "uiov",
      fee_coin_price: "0.000000100000000000",
      fee_default: "0.010000000000000000",
      register_account_closed: "0.100000000000000000",
      register_account_open: "0.100000000000000000",
      transfer_account_closed: "1.000000000000000000",
      transfer_account_open: "1.000000000000000000",
      replace_account_resources: "0.100000000000000000",
      add_account_certificate: "1.000000000000000000",
      del_account_certificate: "0.010000000000000000",
      set_account_metadata: "0.100000000000000000",
      register_domain_1: "1000.000000000000000000",
      register_domain_2: "500.000000000000000000",
      register_domain_3: "200.000000000000000000",
      register_domain_4: "100.000000000000000000",
      register_domain_5: "50.000000000000000000",
      register_domain_default: "7.000000000000000000",
      register_open_domain_multiplier: "3.000000000000000000",
      transfer_domain_closed: "1.000000000000000000",
      transfer_domain_open: "1.000000000000000000",
      renew_domain_open: "25.000000000000000000",
    };
    const result = wrapFees(rawFees);
    expect(result).toEqual({
      fee_coin_denom: "uiov",
      fee_coin_price: Decimal.fromUserInput("0.000000100000000000", 18),
      fee_default: Decimal.fromUserInput("0.010000000000000000", 18),
      register_account_closed: Decimal.fromUserInput("0.100000000000000000", 18),
      register_account_open: Decimal.fromUserInput("0.100000000000000000", 18),
      transfer_account_closed: Decimal.fromUserInput("1.000000000000000000", 18),
      transfer_account_open: Decimal.fromUserInput("1.000000000000000000", 18),
      replace_account_resources: Decimal.fromUserInput("0.100000000000000000", 18),
      add_account_certificate: Decimal.fromUserInput("1.000000000000000000", 18),
      del_account_certificate: Decimal.fromUserInput("0.010000000000000000", 18),
      set_account_metadata: Decimal.fromUserInput("0.100000000000000000", 18),
      register_domain_1: Decimal.fromUserInput("1000.000000000000000000", 18),
      register_domain_2: Decimal.fromUserInput("500.000000000000000000", 18),
      register_domain_3: Decimal.fromUserInput("200.000000000000000000", 18),
      register_domain_4: Decimal.fromUserInput("100.000000000000000000", 18),
      register_domain_5: Decimal.fromUserInput("50.000000000000000000", 18),
      register_domain_default: Decimal.fromUserInput("7.000000000000000000", 18),
      register_open_domain_multiplier: Decimal.fromUserInput("3.000000000000000000", 18),
      transfer_domain_closed: Decimal.fromUserInput("1.000000000000000000", 18),
      transfer_domain_open: Decimal.fromUserInput("1.000000000000000000", 18),
      renew_domain_open: Decimal.fromUserInput("25.000000000000000000", 18),
    });
  });
});
