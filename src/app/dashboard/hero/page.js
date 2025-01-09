import React from 'react'

export default function page() {
    return (
        <div>
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-2xl font-bold mb-6">Hero Section Content</h1>
                <table class="w-full border-collapse border border-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                                Title
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                                Subtitle
                            </th>
                            <th class="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                                Stats
                            </th>
                     
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="even:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                                Crafting Digital Experiences
                            </td>
                            <td class="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                                We build engaging websites, brands & innovative e-commerce solutions.
                            </td>
                            <td class="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                                <ul class="list-disc list-inside">
                                    <li>500 - Satisfied Customers</li>
                                    <li>300 - Projects Completed</li>
                                    <li>50 - Awards Won</li>
                                </ul>
                            </td>
                        
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
