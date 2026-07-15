---
title: "CAN Bus Arbitration: How Messages Compete for the Bus"
tags: [embedded, protocols, firmware]
growth-stage: budding
date: 2026-07-15
---

> Bits fight on one wire,
> None destroyed, just one wins out—
> Peace in the chaos.

## Overview

CAN (Controller Area Network) bus arbitration is an elegant mechanism that lets multiple nodes compete for a shared medium without collisions or message loss. Unlike Ethernet's CSMA/CD (which detects collisions after they happen), CAN uses *non-destructive* bitwise arbitration: the winning message is determined bit by bit, in real-time, during transmission.

The secret lies in CAN's open-drain signaling. Each bit on the bus is encoded as *dominant* (logic 0, low voltage) or *recessive* (logic 1, high voltage). If one node drives dominant while another drives recessive, the dominant state wins. More critically, a node always knows whether its transmitted bit matched the bus state. If a node sends a recessive bit but reads dominant, another node is transmitting—that node must have a higher-priority message (a lower CAN ID), so the losing node stops transmitting and waits for the next opportunity.

**How ID priority works:** CAN IDs are part of the arbitration field. In standard (11-bit) CAN, lower IDs have higher priority. During arbitration, nodes transmit their ID sequentially. The first node to lose arbitration backs off; the one whose ID wins continues. This is non-preemptive within a transmission but ensures that messages with lower IDs are always prioritized during bus contention.

This design is elegant for safety-critical systems—vehicle ECUs, industrial automation, avionics—because there's no risk of a message being corrupted midway. Either you win the arbitration and send cleanly, or you lose early and retry later. CAN FD extends this with higher data rates and larger payloads but retains the same arbitration principle.

The trade-off is latency: high-priority messages must wait for lower-priority ones to finish, and the bus has limited throughput. But determinism and safety are guaranteed.

For comparative analysis of other serial protocols, see [[uart-spi-i2c|UART, SPI, and I2C]]. For scheduling considerations in multi-task systems, explore [[rtos-scheduler|RTOS scheduling]].
