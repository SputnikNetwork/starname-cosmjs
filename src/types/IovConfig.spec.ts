// import { Decimal } from "@cosmjs/math";

import { IovConfigRaw, wrapIovConfig } from "./IovConfig";

describe("IovConfig", () => {
  it("should wrap raw iov configuration object into internal one", () => {
    const rawConfig: IovConfigRaw = {
      configurer: "star1nrnx8mft8mks3l2akduxdjlf8rwqs8r9l36a78",
      valid_domain_name: "^[-a-z0-9_]{4,32}$",
      valid_account_name: "^[-.a-z0-9_]{1,63}$",
      valid_uri: "^[-a-z0-9]{1,15}:[-a-z0-9]{1,40}$",
      valid_resource: "^[-.a-z0-9A-Z/:_ #]{1,200}$",
      domain_renew_period: "31557600000000000",
      domain_renew_count_max: 2,
      domain_grace_period: "5184000000000000",
      account_renew_period: "31557600000000000",
      account_renew_count_max: 4,
      account_grace_period: "5184000000000000",
      resources_max: 24,
      certificate_size_max: 1024,
      certificate_count_max: 5,
      metadata_size_max: 1024,
    };

    const result = wrapIovConfig(rawConfig);
    expect(result).toEqual({
      configurer: "star1nrnx8mft8mks3l2akduxdjlf8rwqs8r9l36a78",
      valid_domain_name: "^[-a-z0-9_]{4,32}$",
      valid_account_name: "^[-.a-z0-9_]{1,63}$",
      valid_uri: "^[-a-z0-9]{1,15}:[-a-z0-9]{1,40}$",
      valid_resource: "^[-.a-z0-9A-Z/:_ #]{1,200}$",
      domain_renew_period: 31557600000,
      domain_renew_count_max: 2,
      domain_grace_period: 5184000000,
      account_renew_period: 31557600000,
      account_renew_count_max: 4,
      account_grace_period: 5184000000,
      resources_max: 24,
      certificate_size_max: 1024,
      certificate_count_max: 5,
      metadata_size_max: 1024,
    });
  });
});
