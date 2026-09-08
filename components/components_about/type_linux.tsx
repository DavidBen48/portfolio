import React from 'react';

const TypeLinux: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-accent font-bold">david@otg-datacenter</span><span className="text-gray-400">:</span><span className="text-blue-400">~</span><span className="text-gray-300">$ uname -srmo</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell text-gray-300 pl-2">
          Linux 6.8.0-datacenter-hardened x86_64 GNU/Linux
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell">
          <span className="text-accent font-bold">david@otg-datacenter</span><span className="text-gray-400">:</span><span className="text-blue-400">~</span><span className="text-gray-300">$ systemctl status datacenter-health.service</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell text-green-400 pl-2">
          ● datacenter-health.service - OTG Hardware & Infrastructure Monitor
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell text-gray-400 pl-4">
          Loaded: loaded (/etc/systemd/system/datacenter-health.service; enabled)
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell text-gray-400 pl-4">
          Active: <span className="text-green-400 font-bold">active (running)</span> - All 42 racks operational
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell text-gray-400 pl-4">
          Tasks: 18 (servers, switches, storages, blades, enclosures)
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell">
          <span className="text-accent font-bold">david@otg-datacenter</span><span className="text-gray-400">:</span><span className="text-blue-400">~</span><span className="text-gray-300">$ sudo dmesg -T | grep -E "hotplug|firmware|systemboard"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell text-sky-300 pl-2">
          [Mon Sep  7 10:14:02] pci: Enclosure blade bay 04: Systemboard replacement verified OK
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell text-sky-300 pl-2">
          [Mon Sep  7 11:22:45] scsi: SAS RAID controller: Hot-swap disk replacement successful
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell text-sky-300 pl-2">
          [Mon Sep  7 14:05:19] bios: Firmware flashed to latest vendor release [N1 on-site validated]
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell">
          <span className="text-accent font-bold">david@otg-datacenter</span><span className="text-gray-400">:</span><span className="text-blue-400">~</span><span className="text-gray-300">$ echo "CyberSec & DevSecOps: Baseline Secure"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell text-yellow-300 pl-2">
          CyberSec & DevSecOps: Baseline Secure
        </span>
      </div>
    </>
  );
};

export default TypeLinux;
