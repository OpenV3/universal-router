// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {DeployUniversalRouter} from '../DeployUniversalRouter.s.sol';
import {RouterParameters} from 'contracts/types/RouterParameters.sol';

contract DeployInkSepolia is DeployUniversalRouter {
    function setUp() public override {
        params = RouterParameters({
            permit2: 0xE3709aB08457c8eDb0c0ee4c4F9193B39efC0769,
            weth9: 0x4200000000000000000000000000000000000006,
            v2Factory: 0x5cfE73b0238Bb3E636Dc4e68a31bEe5d7fbEa1fa,
            v3Factory: 0xcfEA11557Bc9cB71bc6916e09fC8493D668b8d53,
            pairInitCodeHash: 0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f,
            poolInitCodeHash: 0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54,
            v4PoolManager: address(0),
            v3NFTPositionManager: 0x34513e8A327987Bb44acF5A925a7f3b4092d8b5F,
            v4PositionManager: address(0)
        });

        unsupported = address(0);
    }
}
